export interface Projectitem {
        group: string;
        figureclass: string;
        card_type: number;
        cy_class: string;

        date: string;
        title: string;
        type_project:string;
        rol: string;
        autor: string;
        url_thumnails: string;
        url_background:string;
        url_devices:string;
        url_mobile:string;
        url_mocks:string;
        url_public:string;
        co_workers: Coworker,
        thumnail__descripition:string;
        client:string;
        text_presentation:string;
}
export interface Coworker
{
  name:string;
  rol:string;
  url_network:string;
}

export interface MailSendMe {
  name:string;
  email:string;
  phone:string;
  message:string;

}
