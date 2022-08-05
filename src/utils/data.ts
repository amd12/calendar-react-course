import {Moment} from "moment";

export const reformatDate = (data: Moment): string => {

    if (data){
        return  data.subtract(10, 'days').calendar().toString();
    }
    return ''
}
