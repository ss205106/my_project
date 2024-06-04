import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Detail_post } from '../modules/sotreRedux';
import { useNavigate } from 'react-router-dom';
const PostPage = () => {
    const {DetailPost} = useSelector(state =>({
        DetailPost:state.sotreRedux.DetailPost
    }))
    // console.log(DetailPost)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Previous = (id)=>{
        const PreviousID = id -1
        // console.log(id)
        if(id===1){
            alert("이전글이없습니다.")
            return
        }
        dispatch(Detail_post(PreviousID))
    }

    const Next = (id)=>{
        // console.log(id)
        const NextID = id +1
        dispatch(Detail_post(NextID))
    }

    return (
        <div>
            <Header/>
            {DetailPost ?
                    <div style={{height:"500px",width:"700px",margin:"0 auto"}}>
                        <h4>커뮤니티</h4>
                        <div style={{marginTop:"20px"}}>
                            <div>{DetailPost.title}</div>
                            <div style={{display:"flex",justifyContent:"space-between",borderBottom:"1px solid #000"}}>
                                <p>{DetailPost.username}</p>
                                <p>{DetailPost.date}</p>
                            </div>
                            <div>{DetailPost.content}</div>
                        </div>
                        <div>
                            <button onClick={()=>Previous(DetailPost.id)}>이전글</button> 
                            <button onClick={()=>Next(DetailPost.id)}>다음글</button>
                            <button onClick={()=>navigate("/Community")}>목록</button>
                        </div>
                    </div>: 
                    <div>...다시시도해주세요</div>}
            <Footer/>
        </div>
    );
};

export default PostPage;