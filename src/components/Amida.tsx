import { useEffect } from "react";

const Amida = (props: any) => {
    const verticalLine = props.count;
    const horizontalLine = 10;
    const verticalInterval = 40;
    const horizontalInterval = 125;

    const memberList = props.memberList;
    const itemValueList = props.itemValueList;

    useEffect(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        const ctx = canvas!.getContext("2d");

        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
        ctx!.strokeStyle = 'black';
        ctx!.font = '20px serif';

        for (let y = 1; y <= horizontalLine; y++) {
            for (let x = 1; x <= verticalLine; x++) {
                if (y === 1) {
                    ctx!.fillText(memberList[ x - 1 ], horizontalInterval * (x - 0.05) , verticalInterval * (y - 0.5));
                }
                if (y === horizontalLine) {
                    ctx!.fillText(itemValueList[ x - 1 ], horizontalInterval * (x - 0.05) , verticalInterval * (y + 1.6));
                }
            }
        }

        for (let y = 1; y <= horizontalLine; y++) {
            for (let x = 1; x <= verticalLine; x++) {
                if (x === verticalLine || Math.floor(Math.random() * 2) === 0 || y === horizontalLine) {
                    ctx!.beginPath();
                    ctx!.moveTo( horizontalInterval * x, y * verticalInterval);
                    ctx!.lineTo( horizontalInterval * x, ((y + 1) * verticalInterval));
                    ctx!.stroke();
                } else {
                    ctx!.beginPath();
                    ctx!.moveTo( horizontalInterval * x, y * verticalInterval );
                    ctx!.lineTo( horizontalInterval * x, ((y + 1) * verticalInterval));
                    ctx!.lineTo( horizontalInterval * (x + 1), ((y + 1) * verticalInterval));
                    ctx!.moveTo( horizontalInterval * (x + 1), y * verticalInterval );
                    ctx!.lineTo( horizontalInterval * (x + 1), ((y + 1) * verticalInterval));
                    ctx!.stroke();
                    x++;
                }
            }
        }
    },[verticalLine, memberList, itemValueList]);

    return (
        <>
            <canvas width="1350" height="500" id="canvas"></canvas> 
        </>
    )
}

export default Amida;