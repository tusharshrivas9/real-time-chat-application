import React from 'react'

const Dashbord = () => {
  const contacts = [
    {
      name:"Tushar",
      status:"Available",
      img:"https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
    },
    {
      name:"Rahul",
      status:"Available",
      img:"https://www.inventicons.com/uploads/iconset/2240/wm/512/Man-7-31.png"
    },
    {
      name:"Priyanshu",
      status:"Available",
      img:"https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
    },
    {
      name:"Nitish",
      status:"Available",
      img:"https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
    },
    {
      name:"Mangal",
      status:"Available",
      img:"https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
    },
    {
      name:"Dinesh",
      status:"Available",
      img:"https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
    },
    {
      name:"Niraj",
      status:"Available",
      img:"https://banner2.cleanpng.com/20190205/kcg/kisspng-computer-icons-user-profile-avatar-image-5c591e48de1485.9214982415493443289097.jpg"
    },
    {
      name:"Anish",
      status:"Available",
      img:"https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png"
    },
    {
      name:"Priya",
      status:"Available",
      img:"https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png"
    },
    {
      name:"Dristi",
      status:"Available",
      img:"https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg"
    },
  ] 
  return (
    <div className='w-screen flex'>
      <div className='w-[25%] h-screen bg-secondry'>
        <div className='flex justify-center items-center my-8'>
        <div className='border border-primary p-[4px] rounded-full'>
            <img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" alt='' width={100} height={100}/>
            </div>
            <div className='ml-8'>
                <h3 className='text-2xl'>Hello chatters</h3>
                <p className='text-lg font-light'>My Account</p>
            </div>
        </div>
        <hr />
        <div className='mx-10 mt-10'>
          <div className='text-primary text-lg'>Messages</div>
          <div>
            {
              contacts.map(({name,status,img})=>{
                return(
                  
                  <div className='flex items-center py-8 border-b border-b-gray-300'>
                  <div className='cursor-pointer flex items-center'>
                  <div>
                   <img src={img} alt='' width={80} height={80}/>
                  </div>
                  <div className='ml-6'>
                <h3 className='text-lg font-semibold'>{name}</h3>
                <p className='text-sm font-light text-gray-600'>{status}</p>
                </div>
                </div>
                   </div>  
                  
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='w-[50%] bg-white h-screen flex flex-col items-center'>
        <div className='w-[75%] bg-secondry h-[80px] my-14 rounded-full flex items-center px-12'>
         <div className='cursor-pointer'><img src="https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png" width={60} height={60} alt="" /></div>
         <div className='ml-3 mr-auto'>
         <h3 className='text-lg font-semibold'>Priya</h3>
         <p className='text-sm font-light text-gray-600'>online</p>
         </div>
         <div className='cursor-pointer'>
         <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-outgoing"
          width={24} height={24} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          <path d="M15 9l5 -5" /><path d="M16 4l4 0l0 4" /></svg>
         </div>
        </div>
        <div className="h-[75%] w-full overflow-scroll border-b">
          <div className='p-14'>
            <div className=" max-w-[40%] bg-secondry rounded-b-xl rounded-tr-xl py-4 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi tempore quia quam voluptate culpa impedit temporibus reprehenderit sint, ipsum accusamus, omnis, beatae exercitationem?
            </div>
            <div className="max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quasi tempore quia quam voluptate culpa impedit temporibus reprehenderit sint, ipsum accusamus, omnis, beatae exercitationem?
            </div>
          </div>
        </div>
      <div className='p-14 w-full flex items-center'>
        <input type="text" placeholder='Type a message' className='w-[75%] p-3 border-0 shadow-md px-4 rounded-full bg-light focus:ring-0 focus:border-0 outline-none' InputclassName=""/>
        <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width={44} height={30} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 14l11 -11" />
        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
        </div>
        <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-paperclip" width={44} height={30} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" /></svg>
        </div>
      </div>
      </div>
      <div className='w-[25%] h-screen bg-light'></div>
     
    </div>
  )
}

export default Dashbord
