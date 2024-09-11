interface IProps {
    title: string
}

export const MainHeading = ({ title }: IProps) => (<h2 className="font-semibold text-darkText dark:text-white text-3xl my-12 capitalize">{title}</h2>)
