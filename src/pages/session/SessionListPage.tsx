import SessionList from '@/features/session/ui/SessionList'

export default function SessionListPage() {
    return (
        <div className="flex flex-col flex-1 min-h-full mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Session List</h2>
                <SessionList />
            </div>
            <div className="mb-3"/>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Time Table</h2>
                <div> TimeTable </div>
            </div>
        </div>
    )
}