/*Descripción:

Estás a cargo de una tienda que vende varios productos. La tienda tiene un inventario que contiene información sobre cada producto, incluyendo el nombre del producto, la cantidad en stock y el precio por unidad. El objetivo es implementar varias funciones que permitan:

Mostrar todos los productos disponibles en la tienda.
Añadir un producto nuevo al inventario.
Actualizar la cantidad de un producto existente.
Calcular el total de ventas si un cliente compra múltiples productos.
Eliminar productos que estén agotados del inventario.

let inventario = [
    { nombre: "Manzana", cantidad: 50, precio: 0.5 },
    { nombre: "Plátano", cantidad: 30, precio: 0.3 },
    { nombre: "Naranja", cantidad: 20, precio: 0.7 },
  ];*/


  /*Pseudocodigo
    inicio
        crear array "inventario" que contendrá los objetos "producto"

            inicio-Funcion1
                leer array 
                    si cantidad >=1 
                        mostrar Producto disponible
                    si cantidad <=1 && cantidad ==0 
                        mostrar producto no disponible
            fin-Funcion1

            inicio-funcion2
                leer array
                    usando metodos para array push o unshift añadir elementos
                mostrar array actualizado
            fin-funcion2

            inicio-funcion3
                leer array 
                    usar el metodo objeto.cantidad para modificar el valor de cantidad del que se quiera actualizar
                mostrar nuevo array
            fin-funcion3

            inicio-funcion4
                "carrito": preguntamos que objeto quiere y cuantos 
                leer que y cuantos objetos quiere 
                sumar objetos
                mostarar total precio objetos inidividualmente
                mostrar total 
            fin funcion4

            inicio-funcion5
                leer array
                si cantidad de un objeto == 0 
                    no mostrar produto
                enseñar array actualizado
            fin-funcion5*/
