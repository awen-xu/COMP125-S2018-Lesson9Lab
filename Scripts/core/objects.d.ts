declare module objects {
     /**
         * Creates an instance of Button
         * @param {*} sourcePath 
         * @param {*} width 
         * @param {*} height 
         */
    export class Button{
        constructor(source:string = "", width:number = 0, height:number = 0)
    }

    export class Vector{
        /**
         *Creates an instance of Vector.
         * @param {number} [x=0]
         * @param {number} [y=0]
         */
        constructor(x:number=0, y:number=0);

        /**
         * This method returns string representation of a vector
         * @returns {string}
         */
        public toString():string;

        /**
         * This method returns the distance of two vectors
         *
         * @static
         * @param {Vector} vec1
         * @param {Vector} vec2
         * @returns {number}
         */
        public static distance(vec1:Vector, vec2:Vector):number;

        /**
         * This method returns a new Vector that is the sum of two vectors
         *
         * @static
         * @param {Vector} vec1
         * @param {Vector} vec2
         * @returns {Vector}
         * @memberof Vector
         */
        public static add(vec1:Vector, vec2:Vector):Vector;
    }

}