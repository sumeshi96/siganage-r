import {unknown,sun,sunCloud,sunRain,sunSnow,cloud,cloudSun,cloudRain,cloudSnow,rain,rainSun,rainCloud,rainSnow,snow,snowSun,snowCloud,snowRain} from "../../img"
import styles from "./Image.module.css";

type Props = {
    telop: string
}
const Image = (props: Props) => {
    
    return (
        <img className={styles.img} src={getLogo(props.telop)} alt="天気"/>
    );
}

function getLogo(telop:string) {
    //晴="\u6674",曇="\u66c7",雨="\u96e8",雪="\u96ea"
    if (telop.match(/^\u6674/)) {
        //文頭が晴のとき
        if (telop.match(/\u6674.*\u66c7/)) {
            //晴→曇
            return sunCloud;
        } else if (telop.match(/\u6674.*\u96e8/)) {
            //晴→雨
            return sunRain;
        } else if (telop.match(/\u6674.*\u96ea/)) {
            //晴→雪
            return sunSnow;
        } else {
            //晴
            return sun;
        }
    } else if (telop.match(/^\u66c7/)) {
        //文頭が曇のとき
        if (telop.match(/\u66c7.*\u6674/)) {
            //曇→晴
            return cloudSun;
        } else if (telop.match(/\u66c7.*\u96e8/)) {
            //曇→雨
            return cloudRain;
        } else if (telop.match(/\u66c7.*\u96ea/)) {
            //曇→雪
            return cloudSnow;
        } else {
            //曇
            return cloud;
        }
    } else if (telop.match(/^\u96e8/)) {
        //文頭が雨のとき
        if (telop.match(/\u96e8.*\u6674/)) {
            //雨→晴
            return rainSun;
        } else if (telop.match(/\u96e8.*\u66c7/)) {
            //雨→曇
            return rainCloud;
        } else if (telop.match(/\u96e8.*\u96ea/)) {
            //雨→雪
            return rainSnow;
        } else {
            //雨
            return rain;
        }
    } else if (telop.match(/^\u96ea/)) {
        //文頭が雪のとき
        if (telop.match(/\u96ea.*\u6674/)) {
            //雪→晴
            return snowSun;
        } else if (telop.match(/\u96ea.*\u66c7/)) {
            //雪→曇
            return snowCloud;
        } else if (telop.match(/\u96ea.*\u96e8/)) {
            //雪→雨
            return snowRain;
        } else {
            //雪
            return snow;
        }
    }
    else {
        return unknown;
    }
}

export default Image;