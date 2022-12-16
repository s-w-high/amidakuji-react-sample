import { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Item from '../components/Item';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Member from "../components/Member";

const Top = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState("");
    const [count, setCount] = useState(2);
    const memberList = [];
    const [nameList, setNameList] = useState(["", "", "", "", "", "", "", "", "", ""]);
    const itemList = [];
    const [itemValueList, setItemValueList] = useState(["", "", "", "", "", "", "", "", "", ""]);


    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const handleClick = () => {
        const filterNameList = nameList.filter(Boolean);
        const filterItemValueList = itemValueList.filter(Boolean);
        if (count === filterNameList.length && count === filterItemValueList.length) {
            navigate("/grouping", {
                state: {
                    title: {title},
                    count: {count},
                    memberList: {filterNameList},
                    itemValueList: {filterItemValueList}
                }
            });
        } else {
            const el = document.getElementById('alert') as HTMLElement;
            el.style.visibility = "visible";
        } 
    };

    const increment = () => setCount((prevCount) => {
        return prevCount === 10 ? prevCount : prevCount + 1;
    });
    const decrement = () => setCount((prevCount) => {
        return prevCount === 2 ? prevCount : prevCount - 1;
    });

    return (
        <> 
            <Alert severity="error" id="alert" style={{'visibility': 'hidden'}}>あみだくじの本数とメンバー、結果の個数が一致しません。</Alert>
            <div style={{textAlign: "left", marginLeft: "40px"}}>
                <h1>チーム分けあみだくじ作成</h1>

                <h2>#1. タイトルを入力してください。</h2>
                <TextField
                    required
                    id="title"
                    label="タイトル"
                    variant="filled"
                    onChange={handleTitleChange}
                />

                <h2>#2. あみだくじの本数（2~10本）を選択してください。</h2>
                <h3>現在の本数：{count} 本</h3>
                <Button variant="contained" onClick={increment}>本数を増やす</Button>
                &nbsp;
                <Button variant="contained" onClick={decrement}>本数を減らす</Button>
                <h2>#3. 参加するメンバー（最大10文字（全角5文字））を入力してください。</h2>
                {(() => {
                    for (let i = 0; i < count; i++) {
                        memberList.push(<>
                            名前（{i + 1}人目）: <Member index={i} nameList={nameList} setNameList={setNameList}/>
                            <br />
                        </>
                        )
                    }
                    return <ul>{memberList}</ul>;
                })()}
                <h2>#4. 結果を入力してください。</h2>
                {(() => {
                    for (let i = 0; i < count; i++) {
                        itemList.push(<>
                            アイテム{i + 1}: <Item index={i} itemValueList={itemValueList} setItemValueList={setItemValueList}/>
                            <br />
                        </>
                        )
                    }
                    return <ul>{itemList}</ul>;
                })()}

                <Button variant="contained" onClick={handleClick}>あみだくじを作る</Button>
            </div> 
        </>
    )
};

export default Top;