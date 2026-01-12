export interface IpRecordActive {
    isTimeout: true
    timeoutUntil: number
}

export interface IpRecordNotActive {
    isTimeout: false
}

export type IpRecord = IpRecordActive | IpRecordNotActive
