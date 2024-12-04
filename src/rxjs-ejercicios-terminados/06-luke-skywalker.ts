
import { ajax } from 'rxjs/ajax';
import { switchMap, map, concatAll, combineLatestAll, tap, take, shareReplay } from 'rxjs/operators';
import { zip, of, merge, forkJoin } from 'rxjs';

/**
 * Ejercicio: 
 *  Realizar 2 peticiones HTTP (ajax) una después de otra.
 *  
 *  La primera debe de obtener el personaje de Star Wars:
 *   Luke Skywalker, llamando el endpoint:   /people/1/
 * 
 *  La segunda petición, debe de ser utilizando el objeto
 *  de la petición anterior, y tomar la especie (species),
 *  que es un arreglo de URLs (array), dentro de ese arreglo, 
 *  tomar la primera posición y realizar la llamada a ese URL,
 *  el cual debería de traer información sobre su especie (Human)
 */

// Respuesta esperada:
// Información sobre los humanos en el universo de Star Wars
// Ejemplo de la data esperada
/*
 { name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
*/

// Respuesta esperada con Mayor dificultad
// Retornar el siguiente objeto con la información de ambas peticiones
// Recordando que se disparan una después de la otra, 
// con el URL que viene dentro del arreglo de 'species'

// Tip: investigar sobre la función zip: 
//      Que permite combinar observables en un arreglo de valores
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

// Ejemplo de la data esperada:
/*
    especie: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
    personaje: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
*/


(() => {

    // No tocar ========================================================
    const SW_API = 'https://swapi.dev/api';
    const getRequest = (url: string) => ajax.getJSON<any>(url);
    // ==================================================================

    // Realizar el llamado al URL para obtener a Luke Skywalker
    const urlLuke = `${SW_API}/people/1/`


    // getRequest(urlLuke).pipe(
    //     // Realizar los operadores respectivos aquí
    // // NO TOCAR el subscribe ni modificarlo ==

    //     tap(resp => {
    //         console.log(resp['films'][0])

    //         getRequest(resp['films'][0]).pipe(
    //            // tap()
    //         ).subscribe(console.log)
    //     })

    // ).subscribe( console.log )     



    // const lukeRequest$ = getRequest(urlLuke).pipe(shareReplay(1));

    getRequest(urlLuke).pipe(
        switchMap((lukeResponse: any) => {



            const filmsRequest$ = lukeResponse['films'].map((filmUrl: any) => getRequest(filmUrl));


            // espera a que completen todas las epticiones
            // return forkJoin(filmsRequest$).pipe(
            //     switchMap((film:any)=>{

            //         return of({film, lukeResponse})
            //     })
            // )

            return forkJoin(filmsRequest$).pipe(
                map((film:any) => {
                    return {
                        films: film,
                        luke: lukeResponse
                    }
                })
            )
        })
    ).subscribe(console.log)


    // dos peticiones
    // const lukeRequest$ = getRequest(urlLuke).pipe(shareReplay(1));

    // zip(lukeRequest$, lukeRequest$.pipe(
    //     switchMap(luke => getRequest(luke['films'][0]))
    // )).subscribe(console.log)

    // solucion con 3 peticiones
    // zip(
    //     getRequest(urlLuke),
    //     getRequest(urlLuke).pipe(
    //         switchMap(resp => getRequest(resp['films'][0]))
    // ) ).subscribe( console.log )     

    // ==
    // // =======================================






})();
