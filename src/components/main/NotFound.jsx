import { Link } from "react-router-dom"
import dont from "../../assets/images/404.svg"
const NotFound = () => {
  return (
    <div  className="w-100 h-[95vh] flex flex-col justify-between items-center" >
      <img src={dont} alt="" className="w-[800px] h-[500px]" />
      <p className="text-4xl font-bold text-gray-600">صفحه ای که میخواستی اینجا نیست!</p>
      <p className="font-bold text-gray-500">برای پیدا کردن مسیر درست میتونی یک سری به صفحه اول بزنی.</p>
      <Link className="text-blue-500 font-bold" to="/">برگشت به صفحه اصلی</Link>
    </div>
  )
}

export default NotFound
