import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Amida from "../components/Amida";

const Grouping = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <>
            <div style={{textAlign: "left", marginLeft: "40px"}}>
                <br />
                ※ あみだくじを作り直したい場合はリロードしてください。
                <h2>{location.state.title.title}</h2>
                <Amida 
                    count={location.state.count.count} 
                    memberList={location.state.memberList.filterNameList} 
                    itemValueList={location.state.itemValueList.filterItemValueList}
                />
                <Button variant="contained" onClick={handleClick}>トップへ戻る</Button>
            </div>
        </>
    )
};

export default Grouping;