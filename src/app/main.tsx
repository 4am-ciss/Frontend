import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/shared/styles/global.css';

async function enableMocking() {
    if (!import.meta.env.DEV){
        return
    }

    try{
        const { worker } = await import("./mocks/browser")
        await worker.start()
    } catch (error){
        console.error("Failed to start MSW: ", error)
    }
}

async function initializeApp(){
    await enableMocking();

    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );
}

initializeApp();
