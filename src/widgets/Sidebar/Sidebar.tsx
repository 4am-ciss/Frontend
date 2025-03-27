import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const navItems = [
        { label: 'Dashboard', to: '/'},
        { label: 'Settings', to: '/settings'},
        { label: 'Profile', to: '/profile'},
    ]

    return (
        <aside className="w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md rounded-lg flex flex-col p-4 min-h-full ml-4">
            <h1> test </h1>
            <nav className="flex-1">
                <ul className="space-y-2">
                    {navItems.map(({ label, to }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                >
                                    {label}
                                </NavLink>
                            </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar