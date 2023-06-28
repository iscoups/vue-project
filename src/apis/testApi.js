import instance  from "@/utils/http";

export function test(){
    return instance({
        url: 'home/category/head'
    })
}