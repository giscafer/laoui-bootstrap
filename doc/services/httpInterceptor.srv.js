/**
 * 
 */
export default class HttpInteceptor {
    constructor($q) {
        "ngInject";
        this.$q = $q;
    }

    request(request) {
        return request;
    }

    response(response) {
        return response;
    }

    reponseError(rejection) {
        console.log(rejection);
        return rejection;
    }

    static factory($q) {
        "ngInject";
        return new HttpInteceptor($q);
    }
}
