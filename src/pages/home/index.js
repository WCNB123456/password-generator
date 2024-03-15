import './home.css'
import Generator from '../../components/passGenerator'

const Home =()=>{
    return(
        <div className="bg">
            <div className="title">
                需要生成密码？试试Meinaの密码生成器
            </div>
            <div className="sub-title">
                生成安全、随机的密码以保持网络安全
            </div>
            <div className="generator">
                <Generator/>
            </div>
        </div>
    )
}
export default Home;