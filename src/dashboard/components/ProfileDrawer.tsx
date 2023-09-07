import { BsQuestionCircleFill } from "@react-icons/all-files/bs/BsQuestionCircleFill";
import { IoIosNotifications } from "@react-icons/all-files/io/IoIosNotifications";
import useStore from "../../hooks/useStore";

export const ProfileDrawer = () => {
  const { profile } = useStore();
  return (
    <nav className="fixed shadow-md right-0 h-full w-[23rem] bg-white">
      <div className="flex items-center space-x-5 justify-end p-3 px-6">
        <BsQuestionCircleFill
          size={23}
          className="text-gray-300 cursor-pointer"
        />
        <IoIosNotifications
          size={28}
          className="text-gray-300 cursor-pointer"
        />
        <img
          src="/images/Avatar.png"
          alt="avatar"
          className=" w-8 h-8 cursor-pointer"
        />
      </div>
      <div className="p-5 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src="/images/Avatar.png"
            alt="user-img"
            className="w-44 cursor-pointer"
          />
          <h3 className="font-bold tracking-wider text-gray-700 text-xl capitalize mt-3">
            {profile?.name}
          </h3>
          <p className="text-gray-400 font-medium text-sm my-1">
            Director of Recruiting
          </p>
          <p className="text-xs text-gray-400">{profile?.email}</p>
        </div>
      </div>

      <div className="m-6">
        <h1 className="my-3 font-medium text-lg text-gray-700">Messages</h1>
        <div className="space-y-3">
          <div className="p-3 w-full space-x-3 flex items-center bg-gray-50 rounded-lg hover:shadow-md hover:cursor-pointer duration-500">
            <img src="/images/Avatar-3.png" alt="user-img" className="w-10" />
            <div className="w-52">
              <h3 className=" tracking-wider text-gray-700 font-medium">
                Cameron Williamson
              </h3>
              <p className="truncate my-1 text-ellipsis text-xs tracking-wider text-gray-400">
                Have you planned any deadline to meet with me?
              </p>
            </div>
          </div>
          <div className="p-3 w-full space-x-3 flex items-center bg-gray-50 rounded-lg hover:shadow-md hover:cursor-pointer duration-500">
            <img src="/images/Avatar-2.png" alt="user-img" className="w-10" />
            <div className="w-52">
              <h3 className=" tracking-wider text-gray-700 font-medium">
                Jacob Jones
              </h3>
              <p className="truncate my-1 text-ellipsis text-xs tracking-wider text-gray-400">
                The candidate has been shortlisted
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-6">
        <h1 className="my-3 font-medium text-lg text-gray-700 capitalize">
          Recently added jobs
        </h1>
        <div className="space-y-3 overflow-scroll h-44 2xl:h-96">
          <div className="p-3 w-full space-x-4 flex items-center bg-gray-50 rounded-lg hover:shadow-md hover:cursor-pointer duration-500">
            <img src="/images/spotify.svg" alt="job-img1" className="w-9" />
            <div className="w-52">
              <h3 className=" tracking-wider text-gray-700 font-medium">
                Product Designer
              </h3>
              <p className="truncate my-1 text-ellipsis text-xs tracking-wider text-gray-400">
                Spotify, Singapore - 6 hours ago
              </p>
            </div>
          </div>
          <div className="p-3 w-full space-x-4 flex items-center bg-gray-50 rounded-lg hover:shadow-md hover:cursor-pointer duration-500">
            <img src="/images/invision.svg" alt="job-img2" className="w-9" />
            <div className="w-52">
              <h3 className=" tracking-wider text-gray-700 font-medium">
                IOS Developer
              </h3>
              <p className="truncate my-1 text-ellipsis text-xs tracking-wider text-gray-400">
                San Francisco, CA - 2 Days ago
              </p>
            </div>
          </div>
          <div className="p-3 w-full space-x-4 flex items-center bg-gray-50 rounded-lg hover:shadow-md hover:cursor-pointer duration-500">
            <img src="/images/shazam.svg" alt="job-img2" className="w-9" />
            <div className="w-52">
              <h3 className=" tracking-wider text-gray-700 font-medium">
                Brand Strategist
              </h3>
              <p className="truncate my-1 text-ellipsis text-xs tracking-wider text-gray-400">
                New york, US - 2 Days ago
              </p>
            </div>
          </div>
          <div className="p-3 w-full space-x-4 flex items-center bg-gray-50 rounded-lg hover:shadow-md hover:cursor-pointer duration-500">
            <img src="/images/adobe.svg" alt="job-img2" className="w-9" />
            <div className="w-52">
              <h3 className=" tracking-wider text-gray-700 font-medium">
                Jr. Frontend Engineer
              </h3>
              <p className="truncate my-1 text-ellipsis text-xs tracking-wider text-gray-400">
                Spotify, Singapore- 2 Days ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
