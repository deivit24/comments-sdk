
export interface CommentSectionProps {
    apiKey: string,
    page?: string,
    width: number,
    anchor: string | undefined,
    open?: boolean,
    onClose: () => void,
    backgroundColor: string
}
