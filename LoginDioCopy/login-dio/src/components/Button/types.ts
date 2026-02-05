interface IButton{
    title: string;
    variant?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export { type IButton }