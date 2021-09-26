import Start from "../components/start"
export default function Home() {
  return (
    <div
      className='min-h-screen bg-cover bg-no-repeat '
      style={{ backgroundImage: 'url(../wallpaper/1.jpg)' }}
    >
    <Start className='bottom-14 left-1/2' />
    <div id='taskbar' className="flex justify-center fixed bottom-0 p-1 w-[100%] bg-glass">
      <div className="p-[0.25rem] hover:bg-gray-50/5 rounded-md">
        <img src="../icons/start.png" alt="" width='30px' />
      </div>
    </div>
    </div>
  )
}
