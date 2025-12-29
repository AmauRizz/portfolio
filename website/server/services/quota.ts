export interface IpRecord {
    timeoutUntil: number
}

class QuotaService {
    private store: Record<string, IpRecord> = {}
    private readonly TIMEOUT_MS = 15 * 60 * 1000 // 15 minutes

    updateTimeout(ip: string) {
        const now = Date.now()
        let record = this.store[ip]

        if (!record) {
            record = this.store[ip] = { timeoutUntil: -1 }
        }
        record.timeoutUntil = now + this.TIMEOUT_MS
    }

    getInfo(ip: string) {
        const now = Date.now()
        const record = this.store[ip]

        if (!record) return { isTimeout: false }

        if (record.timeoutUntil > now) {
            return { isTimeout: true, timeoutUntil: record.timeoutUntil }
        } else {
            return { isTimeout: false }
        }
    }
}

export const quotaService = new QuotaService()