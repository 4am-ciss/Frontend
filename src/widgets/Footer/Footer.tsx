const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400">
            @ {year} GNU-4AM. All Rights reserved.
        </footer>
    )
}

export default Footer