// import { Emoji } from './components/Emoji'

import { LogoFriends } from "./components/LogoFriends";
import { LogoDiscord } from "./components/LogoDiscord";
import { LogoNorte } from "./components/LogoNorte";
import { LogoPlus } from "./components/LogoPlus";
import { LogoNitro } from "./components/LogoNitro";
import { LogoPlus2 } from "./components/LogoPlus2";

export default function Home() {
  return (
    <div className="grid grid-flow-col auto-cols-auto ">
      <div className=" bg-red-700 h-screen w-[70px] ">
        <div className="flex justify-center m-2 bg-dcblue p-4 rounded-lg">
          <LogoDiscord/>
        </div>
        <div className="flex justify-center h-1 mt-2 border-b-2 border-traco w-8 m-auto rounded-full">
          
        </div>
        <div>
        <div className="flex justify-center m-2 mt-2 bg-dcblue p-4 rounded-full cursor-pointer hover:bg-dcblue100">
          <LogoDiscord/>
        </div>
          <div className="
          flex justify-center text-[10px] items-center
          ml-11 h-5 w-5 mt-[-20px] bg-dcred p-1 rounded-full border-2 border-traco">1</div>
          
        </div>
        <div className="flex justify-center m-2 mt-2 bg-dcblue p-4 rounded-full  cursor-pointer hover:bg-dcblue100">
          <LogoDiscord/>
        </div>
        <div className="flex justify-center m-2 mt-2 bg-dcblue p-4 rounded-full  cursor-pointer hover:bg-dcblue100">
          <LogoDiscord/>
        </div>
        <div className="flex justify-center m-2 mt-2 bg-dcfundo2 p-4 rounded-full  cursor-pointer hover:bg-bgdc1">
          <LogoPlus/>
        </div>
        <div className="flex justify-center m-2 mt-2 bg-dcfundo2 p-4 rounded-full  cursor-pointer hover:bg-bgdc1">
          <LogoNorte/>
        </div>

      </div>
      <div className=" bg-dcfundo h-screen w-60 ">
        <div className="border-b-2 border-traco flex items-center w-[240px] h-[50px]">
          <input type="text"  className="bg-dcfundo3 outline-none border-none rounded w-[220px] text-sm h-7 m-2 p-2" placeholder="Find or start a conversation"/>
        </div>
        <div >
          <p className="flex m-4 gap-2 text-textColor hover:bg-textHover hover:text-textWhite p-2 rounded"><LogoFriends/> Friends</p>
          <p className="flex m-4 gap-2 text-textColor hover:bg-textHover hover:text-textWhite p-2 rounded"><LogoNitro/> Nitro</p>
        </div>

        <div>
          <p className="flex gap-16 m-4 text-sm text-textColor items-center">DIRECT MESSAGES <LogoPlus2/></p>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex justify-center items-center m-4 mt-2 h-[45px] w-[45px] bg-dcred p-2 rounded-full">
              <LogoDiscord/>
            </div>
            <div className="
            flex justify-center text-[10px] items-center
            ml-12 h-3 w-3 mt-[-30px] bg-dcred p-1 rounded-full border-2 border-traco">
            </div>
          </div>
          <div>
          <p className="text-[16px] text-textColor">Nelly</p>
          <p className="text-[13px] text-textColor">Listening to <span className="font-bold">Spotify</span></p>
          </div>
        </div>
        
        <div className="flex items-center mt-2">
          <div>
            <div className="flex justify-center items-center m-4 mt-2 h-[45px] w-[45px] bg-dcred p-2 rounded-full">
              <LogoDiscord/>
            </div>
            <div className="
            flex justify-center text-[10px] items-center
            ml-12 h-3 w-3 mt-[-30px] bg-dcgreen p-1 rounded-full border-2 border-traco">
            </div>
          </div>
          <div>
          <p className="text-[16px] text-textColor">Nelly</p>
          </div>
        </div>


      </div>

      <div className="col-span-2 bg-fundo3 w-[1015px]">

      <div className="flex gap-7 p-2 items-center border-b-2 border-b-traco">
        <div className="flex gap-2 ml-2 cursor-pointer">
          <LogoFriends/> Friends
          <div className="border-r-2 border-dcfundo2 ml-4"></div>
        </div>
        <div className="cursor-pointer p-1 hover:bg-textHover hover:p-1 hover:rounded">
          Online
        </div>
        <div className="cursor-pointer">
          All
        </div>
        <div className="flex justify-center items-center gap-1 cursor-pointer p-1 hover:bg-textHover hover:p-1 hover:rounded">
          <p>Pending </p>
          <p className="bg-dcred h-5 w-5 p-2 rounded-full flex justify-center items-center">1</p>
        </div>
        <div className="cursor-pointer p-1 hover:bg-textHover hover:p-1 hover:rounded">
          Suggestion
        </div>
        <div className="cursor-pointer p-1 hover:bg-textHover hover:p-1 hover:rounded">
          Blocked
        </div>
        <div className="bg-dcgreen rounded p-1 cursor-pointer">
          Add Friend
        </div>
      </div>
      <div>
        <div className="flex items-center m-8 mt-2">
          <p className="flex flex-row justify-center items-center  mt-2">Online - 6</p>
        </div>
          <div className="flex justify-center h-1 mb-2 mt-[-22px] border-b-2 border-dcfundo2 w-[945px] m-auto rounded-full"></div>
        
        <div className="flex items-center m-8 mt-2 gap-2">
          <div>
            <div className="flex justify-center items-center h-[45px] w-[45px] bg-dcred p-2 rounded-full">
              <LogoDiscord/>
            </div>
            <div className="
            flex justify-center text-[10px] items-center
            ml-9 h-3 w-3 mt-[-15px] bg-dcgreen p-1 rounded-full border-2 border-traco">
            </div>
          </div>
          <div>
          <p className="text-[16px] text-textColor">Nelly</p>
          </div>
        </div>

        <div className="flex justify-center h-1 mb-2 mt-[-22px] border-b-2 border-dcfundo2 w-[945px] m-auto rounded-full"></div>
        
        <div className="flex items-center m-8 mt-2 gap-2">
          <div>
            <div className="flex justify-center items-center h-[45px] w-[45px] bg-dcred p-2 rounded-full">
              <LogoDiscord/>
            </div>
            <div className="
            flex justify-center text-[10px] items-center
            ml-9 h-3 w-3 mt-[-15px] bg-dcgreen p-1 rounded-full border-2 border-traco">
            </div>
          </div>
          <div>
          <p className="text-[16px] text-textColor">Nelly</p>
          </div>
        </div>



      </div>

      </div>

  </div>
  )
}
