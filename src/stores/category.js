import {defineStore} from 'pinia'
import {ref} from 'vue'
import { getCategoryApi } from "@/apis/layheaderApi"

export const useCategoryStore = defineStore('categoryList',()=>{
    const categoryList = ref([])
    const getCategoryList = async() =>{
        const {result} = await getCategoryApi()
        categoryList.value = result
    }

    return {
        categoryList,
        getCategoryList
    }
})