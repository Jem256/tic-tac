import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import JoinGame from './components/JoinGame';

function App() {
    const api_key = 'tjme3f9w96xc';
    const cookies = new Cookies();
    const token = cookies.get('token');
    const client = StreamChat.getInstance(api_key, {
        timeout: 6000,
    });
    const [isAuth, setIsAuth] = useState(false);

    const logout = () => {
        cookies.remove('token');
        cookies.remove('userId');
        cookies.remove('firstName');
        cookies.remove('lastName');
        cookies.remove('hashedPassword');
        cookies.remove('channelName');
        cookies.remove('username');
        client.disconnectUser();
        setIsAuth(false);
    };

    if (token) {
        client
            .connectUser(
                {
                    id: cookies.get('userId'),
                    name: cookies.get('username'),
                    firstName: cookies.get('firstName'),
                    lastName: cookies.get('lastName'),
                    hashedPassword: cookies.get('hashedPassword'),
                },
                token
            )
            .then(() => {
                setIsAuth(true);
            });
    }
    return (
        <div className='App'>
            {isAuth ? (
                <Chat client={client}>
                    <JoinGame />
                    <button onClick={logout}>Log Out</button>
                </Chat>
            ) : (
                <>
                    <SignUp setIsAuth={setIsAuth} />
                    <Login setIsAuth={setIsAuth} />
                </>
            )}
        </div>
    );
}

export default App;
