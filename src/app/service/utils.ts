export class Utils {

    static convertUrl(url?: string): string {
        if(url){
            return url.replace(/.*\/\/[^\/]*\//, '')
        } else {
            return ""
        }
    }
}