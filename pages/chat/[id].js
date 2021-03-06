import Head from 'next/head';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase';
import {getRecipientEmail} from '../../utils/getRecipientEmail'
import ChatScreen from '../../components/ChatScreen';

function chat({ messages, chat }) {
    const [user] = useAuthState(auth);

    return (
        <Container>
            <Head>
                <title>Chat with {getRecipientEmail(chat.users, user)}</title>
            </Head>
            <Sidebar />
            <ChatContainer>
                <ChatScreen chat={chat} messages={messages} />
            </ChatContainer>
        </Container>
    )
}

export default chat;

export const getServerSideProps = async (context) => {
    const ref = db.collection('chats').doc(context.query.id);

    // PREP the messages on the server
    const messagesRes = await ref
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .get();
    
    const messages = messagesRes.docs
        .map((doc) => ({
            id: doc.id,
            ...doc.data,
        })).map((messages) => ({
            ...messages,
            timestamp: messages.timestamp?.toDate().getTime(),
        }));
    
    // PREP the chats
    const chatRes = await ref.get();
    const chat = {
        id: chatRes.id,
        ...chatRes.data(),
    };

    return {
        props: {
            messages: JSON.stringify(messages),
            chat
        }
    }

};

const Container = styled.div`
    display: flex;
`;

const ChatContainer = styled.div`
    flex: 1;
    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE or Edge*/
    scrollbar-width: none; /* firefox */
`;
