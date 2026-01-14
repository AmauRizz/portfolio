interface BaseService {
    type: ServiceType
    icon: string
    label: string
    description: string
    priceText: string

    features: Feature[]

    cta: CallToAction
}

interface PrimaryService extends BaseService {
    type: ServiceType.PRIMARY
    projects: Project[]
    badge: Badge
}

interface SecondaryService extends BaseService {
    type: ServiceType.SECONDARY
}

export type Service = PrimaryService | SecondaryService

export enum ServiceType {
    PRIMARY,
    SECONDARY
}

interface Feature {
    label: string
}

interface Project {
    image: string
    label: string
    url: string
}

interface Badge {
    icon: string
    label: string
}

interface CallToAction {
    type: CallToActionType
    label: string
}

export enum CallToActionType {
    PRIMARY,
    SECONDARY,
    FALLBACK
}