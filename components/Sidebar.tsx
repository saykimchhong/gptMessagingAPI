"use client";

import { useSession, signOut } from "next-auth/react";
import { NewChat } from "./NewChat";
import ChatRow from "./ChatRow";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import ModelSelection from "./ModelSelection";

function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createAt", "asc")
      )
  );
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New chat */}
          <NewChat />
        </div>
        <div className="hidden sm:inline">
          <ModelSelection />
        </div>

        <div className="flex flex-col space-y-2 my-2">
          {loading && (
            <div className="animate-pulse text-center text-white">
              <p>loading chats...</p>
            </div>
          )}

          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
          {/* Map through the CharTows */}
        </div>
      </div>
      {session && (
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={session.user?.image!}
              alt="User profile"
              className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
            />
            <p className="text-white px-3">{session.user?.email!}</p>
          </div>
          <button
            onClick={() => {
              signOut();
            }}
            className="bg-[#e21818] text-white w-full p-3"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
