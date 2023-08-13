import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type props={
params:{
  id:string
}
}

function ChatPage({params: {id}}:props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chats */} 
      <Chat chatId={id}/>
      {/* Chat input */}
      <ChatInput chatId={id}/>
    </div>
  );
}

export default ChatPage;