export interface FeePayer {
    label: string;
}

export interface CheckboxProps {
    payers: FeePayer[];
    disabled?: number[]
}