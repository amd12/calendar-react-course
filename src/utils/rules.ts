import {message} from "antd";

export const rules = {
    required:(message: string) => ({
        required: true,
        message: message
})

}
