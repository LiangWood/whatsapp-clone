import { Circle } from 'better-react-spinkit';
function Loading() {
    return (
        <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
            <div>
                <img
                    src="https://www.flaticon.com/svg/vstatic/svg/220/220236.svg?token=exp=1617024272~hmac=e1c1fbbfb117359aed24a6afa8824fd4"
                    alt=""
                    style={{ marginBottom: 10 }}
                    height={200}
                />
                <Circle color="#3CBC28" size={60}/>
            </div>
        </center>
    ) 
}

export default Loading;
