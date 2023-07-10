export interface CommentSectionProps {
    apiKey: string,
    page?: string,
    width: number,
    anchor: "left" | "top" | "right" | "bottom" | undefined,
    open?: boolean,
    onClose: () => void,
    backgroundColor: string
}