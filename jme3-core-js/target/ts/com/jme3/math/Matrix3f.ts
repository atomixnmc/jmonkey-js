/* Generated from Java with JSweet 1.2.0 - http://www.jsweet.org */
namespace com.jme3.math {
    import BufferUtils = com.jme3.util.BufferUtils;

    import TempVars = com.jme3.util.TempVars;

    import IOException = java.io.IOException;

    import FloatBuffer = java.nio.FloatBuffer;

    import Logger = java.util.logging.Logger;

    /**
     * <code>Matrix3f</code> defines a 3x3 matrix. Matrix data is maintained
     * internally and is accessible via the get and set methods. Convenience methods
     * are used for matrix operations as well as generating a matrix from a given
     * set of values.
     * 
     * @author Mark Powell
     * @author Joshua Slack
     */
    export class Matrix3f implements Savable, java.lang.Cloneable, java.io.Serializable {
        static serialVersionUID : number = 1;

        static logger : Logger; public static logger_$LI$() : Logger { if(Matrix3f.logger == null) Matrix3f.logger = Logger.getLogger(/* getName */(c => c["__class"]?c["__class"]:c.name)(Matrix3f)); return Matrix3f.logger; };

        m00 : number;

        m01 : number;

        m02 : number;

        m10 : number;

        m11 : number;

        m12 : number;

        m20 : number;

        m21 : number;

        m22 : number;

        public static ZERO : Matrix3f; public static ZERO_$LI$() : Matrix3f { if(Matrix3f.ZERO == null) Matrix3f.ZERO = new Matrix3f(0, 0, 0, 0, 0, 0, 0, 0, 0); return Matrix3f.ZERO; };

        public static IDENTITY : Matrix3f; public static IDENTITY_$LI$() : Matrix3f { if(Matrix3f.IDENTITY == null) Matrix3f.IDENTITY = new Matrix3f(); return Matrix3f.IDENTITY; };

        /**
         * constructs a matrix with the given values.
         * 
         * @param m00
         * 0x0 in the matrix.
         * @param m01
         * 0x1 in the matrix.
         * @param m02
         * 0x2 in the matrix.
         * @param m10
         * 1x0 in the matrix.
         * @param m11
         * 1x1 in the matrix.
         * @param m12
         * 1x2 in the matrix.
         * @param m20
         * 2x0 in the matrix.
         * @param m21
         * 2x1 in the matrix.
         * @param m22
         * 2x2 in the matrix.
         */
        public constructor(m00? : any, m01? : any, m02? : any, m10? : any, m11? : any, m12? : any, m20? : any, m21? : any, m22? : any) {
            if(((typeof m00 === 'number') || m00 === null) && ((typeof m01 === 'number') || m01 === null) && ((typeof m02 === 'number') || m02 === null) && ((typeof m10 === 'number') || m10 === null) && ((typeof m11 === 'number') || m11 === null) && ((typeof m12 === 'number') || m12 === null) && ((typeof m20 === 'number') || m20 === null) && ((typeof m21 === 'number') || m21 === null) && ((typeof m22 === 'number') || m22 === null)) {
                let __args = Array.prototype.slice.call(arguments);
                this.m00 = 0;
                this.m01 = 0;
                this.m02 = 0;
                this.m10 = 0;
                this.m11 = 0;
                this.m12 = 0;
                this.m20 = 0;
                this.m21 = 0;
                this.m22 = 0;
                (() => {
                    this.m00 = m00;
                    this.m01 = m01;
                    this.m02 = m02;
                    this.m10 = m10;
                    this.m11 = m11;
                    this.m12 = m12;
                    this.m20 = m20;
                    this.m21 = m21;
                    this.m22 = m22;
                })();
            } else if(((m00 != null && m00 instanceof com.jme3.math.Matrix3f) || m00 === null) && m01 === undefined && m02 === undefined && m10 === undefined && m11 === undefined && m12 === undefined && m20 === undefined && m21 === undefined && m22 === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let mat : any = __args[0];
                this.m00 = 0;
                this.m01 = 0;
                this.m02 = 0;
                this.m10 = 0;
                this.m11 = 0;
                this.m12 = 0;
                this.m20 = 0;
                this.m21 = 0;
                this.m22 = 0;
                (() => {
                    this.set(mat);
                })();
            } else if(m00 === undefined && m01 === undefined && m02 === undefined && m10 === undefined && m11 === undefined && m12 === undefined && m20 === undefined && m21 === undefined && m22 === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                this.m00 = 0;
                this.m01 = 0;
                this.m02 = 0;
                this.m10 = 0;
                this.m11 = 0;
                this.m12 = 0;
                this.m20 = 0;
                this.m21 = 0;
                this.m22 = 0;
                (() => {
                    this.loadIdentity();
                })();
            } else throw new Error('invalid overload');
        }

        /**
         * Takes the absolute value of all matrix fields locally.
         */
        public absoluteLocal() {
            this.m00 = FastMath.abs(this.m00);
            this.m01 = FastMath.abs(this.m01);
            this.m02 = FastMath.abs(this.m02);
            this.m10 = FastMath.abs(this.m10);
            this.m11 = FastMath.abs(this.m11);
            this.m12 = FastMath.abs(this.m12);
            this.m20 = FastMath.abs(this.m20);
            this.m21 = FastMath.abs(this.m21);
            this.m22 = FastMath.abs(this.m22);
        }

        /**
         * <code>copy</code> transfers the contents of a given matrix to this
         * matrix. If a null matrix is supplied, this matrix is set to the identity
         * matrix.
         * 
         * @param matrix
         * the matrix to copy.
         * @return this
         */
        public set$com_jme3_math_Matrix3f(matrix : Matrix3f) : Matrix3f {
            if(null == matrix) {
                this.loadIdentity();
            } else {
                this.m00 = matrix.m00;
                this.m01 = matrix.m01;
                this.m02 = matrix.m02;
                this.m10 = matrix.m10;
                this.m11 = matrix.m11;
                this.m12 = matrix.m12;
                this.m20 = matrix.m20;
                this.m21 = matrix.m21;
                this.m22 = matrix.m22;
            }
            return this;
        }

        /**
         * <code>get</code> retrieves a value from the matrix at the given
         * position. If the position is invalid a <code>JmeException</code> is
         * thrown.
         * 
         * @param i
         * the row index.
         * @param j
         * the colum index.
         * @return the value at (i, j).
         */
        public get$int$int(i : number, j : number) : number {
            switch((i)) {
            case 0:
                switch((j)) {
                case 0:
                    return this.m00;
                case 1:
                    return this.m01;
                case 2:
                    return this.m02;
                }
            case 1:
                switch((j)) {
                case 0:
                    return this.m10;
                case 1:
                    return this.m11;
                case 2:
                    return this.m12;
                }
            case 2:
                switch((j)) {
                case 0:
                    return this.m20;
                case 1:
                    return this.m21;
                case 2:
                    return this.m22;
                }
            }
            Matrix3f.logger_$LI$().warning("Invalid matrix index.");
            throw new java.lang.IllegalArgumentException("Invalid indices into matrix.");
        }

        /**
         * <code>get(float[])</code> returns the matrix in row-major or column-major order.
         * 
         * @param data
         * The array to return the data into. This array can be 9 or 16 floats in size.
         * Only the upper 3x3 are assigned to in the case of a 16 element array.
         * @param rowMajor
         * True for row major storage in the array (translation in elements 3, 7, 11 for a 4x4),
         * false for column major (translation in elements 12, 13, 14 for a 4x4).
         */
        public get(data? : any, rowMajor? : any) : any {
            if(((data != null && data instanceof Array) || data === null) && ((typeof rowMajor === 'boolean') || rowMajor === null)) {
                let __args = Array.prototype.slice.call(arguments);
                return <any>(() => {
                    if(data.length === 9) {
                        if(rowMajor) {
                            data[0] = this.m00;
                            data[1] = this.m01;
                            data[2] = this.m02;
                            data[3] = this.m10;
                            data[4] = this.m11;
                            data[5] = this.m12;
                            data[6] = this.m20;
                            data[7] = this.m21;
                            data[8] = this.m22;
                        } else {
                            data[0] = this.m00;
                            data[1] = this.m10;
                            data[2] = this.m20;
                            data[3] = this.m01;
                            data[4] = this.m11;
                            data[5] = this.m21;
                            data[6] = this.m02;
                            data[7] = this.m12;
                            data[8] = this.m22;
                        }
                    } else if(data.length === 16) {
                        if(rowMajor) {
                            data[0] = this.m00;
                            data[1] = this.m01;
                            data[2] = this.m02;
                            data[4] = this.m10;
                            data[5] = this.m11;
                            data[6] = this.m12;
                            data[8] = this.m20;
                            data[9] = this.m21;
                            data[10] = this.m22;
                        } else {
                            data[0] = this.m00;
                            data[1] = this.m10;
                            data[2] = this.m20;
                            data[4] = this.m01;
                            data[5] = this.m11;
                            data[6] = this.m21;
                            data[8] = this.m02;
                            data[9] = this.m12;
                            data[10] = this.m22;
                        }
                    } else {
                        throw new java.lang.IndexOutOfBoundsException("Array size must be 9 or 16 in Matrix3f.get().");
                    }
                })();
            } else if(((typeof data === 'number') || data === null) && ((typeof rowMajor === 'number') || rowMajor === null)) {
                return <any>this.get$int$int(data, rowMajor);
            } else throw new Error('invalid overload');
        }

        /**
         * Normalize this matrix and store the result in the store parameter that is
         * returned.
         * 
         * Note that the original matrix is not altered.
         * 
         * @param store the matrix to store the result of the normalization. If this
         * parameter is null a new one is created
         * @return the normalized matrix
         */
        public normalize(store : Matrix3f) : Matrix3f {
            if(store == null) {
                store = new Matrix3f();
            }
            let mag : number = 1.0 / FastMath.sqrt(this.m00 * this.m00 + this.m10 * this.m10 + this.m20 * this.m20);
            store.m00 = this.m00 * mag;
            store.m10 = this.m10 * mag;
            store.m20 = this.m20 * mag;
            mag = 1.0 / FastMath.sqrt(this.m01 * this.m01 + this.m11 * this.m11 + this.m21 * this.m21);
            store.m01 = this.m01 * mag;
            store.m11 = this.m11 * mag;
            store.m21 = this.m21 * mag;
            store.m02 = store.m10 * store.m21 - store.m11 * store.m20;
            store.m12 = store.m01 * store.m20 - store.m00 * store.m21;
            store.m22 = store.m00 * store.m11 - store.m01 * store.m10;
            return store;
        }

        /**
         * Normalize this matrix
         * @return this matrix once normalized.
         */
        public normalizeLocal() : Matrix3f {
            return this.normalize(this);
        }

        /**
         * <code>getColumn</code> returns one of three columns specified by the
         * parameter. This column is returned as a <code>Vector3f</code> object.
         * 
         * @param i
         * the column to retrieve. Must be between 0 and 2.
         * @param store
         * the vector object to store the result in. if null, a new one
         * is created.
         * @return the column specified by the index.
         */
        public getColumn(i : number, store : Vector3f = null) : Vector3f {
            if(store == null) {
                store = new Vector3f();
            }
            switch((i)) {
            case 0:
                store.x = this.m00;
                store.y = this.m10;
                store.z = this.m20;
                break;
            case 1:
                store.x = this.m01;
                store.y = this.m11;
                store.z = this.m21;
                break;
            case 2:
                store.x = this.m02;
                store.y = this.m12;
                store.z = this.m22;
                break;
            default:
                Matrix3f.logger_$LI$().warning("Invalid column index.");
                throw new java.lang.IllegalArgumentException("Invalid column index. " + i);
            }
            return store;
        }

        /**
         * <code>getRow</code> returns one of three rows as specified by the
         * parameter. This row is returned as a <code>Vector3f</code> object.
         * 
         * @param i
         * the row to retrieve. Must be between 0 and 2.
         * @param store
         * the vector object to store the result in. if null, a new one
         * is created.
         * @return the row specified by the index.
         */
        public getRow(i : number, store : Vector3f = null) : Vector3f {
            if(store == null) {
                store = new Vector3f();
            }
            switch((i)) {
            case 0:
                store.x = this.m00;
                store.y = this.m01;
                store.z = this.m02;
                break;
            case 1:
                store.x = this.m10;
                store.y = this.m11;
                store.z = this.m12;
                break;
            case 2:
                store.x = this.m20;
                store.y = this.m21;
                store.z = this.m22;
                break;
            default:
                Matrix3f.logger_$LI$().warning("Invalid row index.");
                throw new java.lang.IllegalArgumentException("Invalid row index. " + i);
            }
            return store;
        }

        /**
         * <code>toFloatBuffer</code> returns a FloatBuffer object that contains
         * the matrix data.
         * 
         * @return matrix data as a FloatBuffer.
         */
        public toFloatBuffer() : FloatBuffer {
            let fb : FloatBuffer = BufferUtils.createFloatBuffer(9);
            fb.put(this.m00).put(this.m01).put(this.m02);
            fb.put(this.m10).put(this.m11).put(this.m12);
            fb.put(this.m20).put(this.m21).put(this.m22);
            fb.rewind();
            return fb;
        }

        /**
         * <code>fillFloatBuffer</code> fills a FloatBuffer object with the matrix
         * data.
         * 
         * @param fb
         * the buffer to fill, starting at current position. Must have
         * room for 9 more floats.
         * @return matrix data as a FloatBuffer. (position is advanced by 9 and any
         * limit set is not changed).
         */
        public fillFloatBuffer(fb : FloatBuffer, columnMajor : boolean) : FloatBuffer {
            let vars : TempVars = TempVars.get();
            this.fillFloatArray(vars.matrixWrite, columnMajor);
            fb.put(vars.matrixWrite, 0, 9);
            vars.release();
            return fb;
        }

        public fillFloatArray(f : number[], columnMajor : boolean) {
            if(columnMajor) {
                f[0] = this.m00;
                f[1] = this.m10;
                f[2] = this.m20;
                f[3] = this.m01;
                f[4] = this.m11;
                f[5] = this.m21;
                f[6] = this.m02;
                f[7] = this.m12;
                f[8] = this.m22;
            } else {
                f[0] = this.m00;
                f[1] = this.m01;
                f[2] = this.m02;
                f[3] = this.m10;
                f[4] = this.m11;
                f[5] = this.m12;
                f[6] = this.m20;
                f[7] = this.m21;
                f[8] = this.m22;
            }
        }

        /**
         * 
         * <code>setColumn</code> sets a particular column of this matrix to that
         * represented by the provided vector.
         * 
         * @param i
         * the column to set.
         * @param column
         * the data to set.
         * @return this
         */
        public setColumn(i : number, column : Vector3f) : Matrix3f {
            if(column == null) {
                Matrix3f.logger_$LI$().warning("Column is null. Ignoring.");
                return this;
            }
            switch((i)) {
            case 0:
                this.m00 = column.x;
                this.m10 = column.y;
                this.m20 = column.z;
                break;
            case 1:
                this.m01 = column.x;
                this.m11 = column.y;
                this.m21 = column.z;
                break;
            case 2:
                this.m02 = column.x;
                this.m12 = column.y;
                this.m22 = column.z;
                break;
            default:
                Matrix3f.logger_$LI$().warning("Invalid column index.");
                throw new java.lang.IllegalArgumentException("Invalid column index. " + i);
            }
            return this;
        }

        /**
         * 
         * <code>setRow</code> sets a particular row of this matrix to that
         * represented by the provided vector.
         * 
         * @param i
         * the row to set.
         * @param row
         * the data to set.
         * @return this
         */
        public setRow(i : number, row : Vector3f) : Matrix3f {
            if(row == null) {
                Matrix3f.logger_$LI$().warning("Row is null. Ignoring.");
                return this;
            }
            switch((i)) {
            case 0:
                this.m00 = row.x;
                this.m01 = row.y;
                this.m02 = row.z;
                break;
            case 1:
                this.m10 = row.x;
                this.m11 = row.y;
                this.m12 = row.z;
                break;
            case 2:
                this.m20 = row.x;
                this.m21 = row.y;
                this.m22 = row.z;
                break;
            default:
                Matrix3f.logger_$LI$().warning("Invalid row index.");
                throw new java.lang.IllegalArgumentException("Invalid row index. " + i);
            }
            return this;
        }

        /**
         * <code>set</code> places a given value into the matrix at the given
         * position. If the position is invalid a <code>JmeException</code> is
         * thrown.
         * 
         * @param i
         * the row index.
         * @param j
         * the colum index.
         * @param value
         * the value for (i, j).
         * @return this
         */
        public set(i? : any, j? : any, value? : any) : any {
            if(((typeof i === 'number') || i === null) && ((typeof j === 'number') || j === null) && ((typeof value === 'number') || value === null)) {
                let __args = Array.prototype.slice.call(arguments);
                return <any>(() => {
                    switch((i)) {
                    case 0:
                        switch((j)) {
                        case 0:
                            this.m00 = value;
                            return this;
                        case 1:
                            this.m01 = value;
                            return this;
                        case 2:
                            this.m02 = value;
                            return this;
                        }
                    case 1:
                        switch((j)) {
                        case 0:
                            this.m10 = value;
                            return this;
                        case 1:
                            this.m11 = value;
                            return this;
                        case 2:
                            this.m12 = value;
                            return this;
                        }
                    case 2:
                        switch((j)) {
                        case 0:
                            this.m20 = value;
                            return this;
                        case 1:
                            this.m21 = value;
                            return this;
                        case 2:
                            this.m22 = value;
                            return this;
                        }
                    }
                    Matrix3f.logger_$LI$().warning("Invalid matrix index.");
                    throw new java.lang.IllegalArgumentException("Invalid indices into matrix.");
                })();
            } else if(((i != null && i instanceof Array) || i === null) && ((typeof j === 'boolean') || j === null) && value === undefined) {
                return <any>this.set$float_A$boolean(i, j);
            } else if(((i != null && i instanceof com.jme3.math.Matrix3f) || i === null) && j === undefined && value === undefined) {
                return <any>this.set$com_jme3_math_Matrix3f(i);
            } else if(((i != null && i instanceof Array) || i === null) && j === undefined && value === undefined) {
                return <any>this.set$float_A_A(i);
            } else if(((i != null && i instanceof Array) || i === null) && j === undefined && value === undefined) {
                return <any>this.set$float_A(i);
            } else if(((i != null && i instanceof com.jme3.math.Quaternion) || i === null) && j === undefined && value === undefined) {
                return <any>this.set$com_jme3_math_Quaternion(i);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * <code>set</code> sets the values of the matrix to those supplied by the
         * 3x3 two dimenion array.
         * 
         * @param matrix
         * the new values of the matrix.
         * @throws JmeException
         * if the array is not of size 9.
         * @return this
         */
        public set$float_A_A(matrix : number[][]) : Matrix3f {
            if(matrix.length !== 3 || matrix[0].length !== 3) {
                throw new java.lang.IllegalArgumentException("Array must be of size 9.");
            }
            this.m00 = matrix[0][0];
            this.m01 = matrix[0][1];
            this.m02 = matrix[0][2];
            this.m10 = matrix[1][0];
            this.m11 = matrix[1][1];
            this.m12 = matrix[1][2];
            this.m20 = matrix[2][0];
            this.m21 = matrix[2][1];
            this.m22 = matrix[2][2];
            return this;
        }

        /**
         * Recreate Matrix using the provided axis.
         * 
         * @param uAxis
         * Vector3f
         * @param vAxis
         * Vector3f
         * @param wAxis
         * Vector3f
         */
        public fromAxes(uAxis : Vector3f, vAxis : Vector3f, wAxis : Vector3f) {
            this.m00 = uAxis.x;
            this.m10 = uAxis.y;
            this.m20 = uAxis.z;
            this.m01 = vAxis.x;
            this.m11 = vAxis.y;
            this.m21 = vAxis.z;
            this.m02 = wAxis.x;
            this.m12 = wAxis.y;
            this.m22 = wAxis.z;
        }

        /**
         * <code>set</code> sets the values of this matrix from an array of
         * values assuming that the data is rowMajor order;
         * 
         * @param matrix
         * the matrix to set the value to.
         * @return this
         */
        public set$float_A(matrix : number[]) : Matrix3f {
            return this.set(matrix, true);
        }

        /**
         * <code>set</code> sets the values of this matrix from an array of
         * values;
         * 
         * @param matrix
         * the matrix to set the value to.
         * @param rowMajor
         * whether the incoming data is in row or column major order.
         * @return this
         */
        public set$float_A$boolean(matrix : number[], rowMajor : boolean) : Matrix3f {
            if(matrix.length !== 9) {
                throw new java.lang.IllegalArgumentException("Array must be of size 9.");
            }
            if(rowMajor) {
                this.m00 = matrix[0];
                this.m01 = matrix[1];
                this.m02 = matrix[2];
                this.m10 = matrix[3];
                this.m11 = matrix[4];
                this.m12 = matrix[5];
                this.m20 = matrix[6];
                this.m21 = matrix[7];
                this.m22 = matrix[8];
            } else {
                this.m00 = matrix[0];
                this.m01 = matrix[3];
                this.m02 = matrix[6];
                this.m10 = matrix[1];
                this.m11 = matrix[4];
                this.m12 = matrix[7];
                this.m20 = matrix[2];
                this.m21 = matrix[5];
                this.m22 = matrix[8];
            }
            return this;
        }

        /**
         * 
         * <code>set</code> defines the values of the matrix based on a supplied
         * <code>Quaternion</code>. It should be noted that all previous values
         * will be overridden.
         * 
         * @param quaternion
         * the quaternion to create a rotational matrix from.
         * @return this
         */
        public set$com_jme3_math_Quaternion(quaternion : Quaternion) : Matrix3f {
            return quaternion.toRotationMatrix(this);
        }

        /**
         * <code>loadIdentity</code> sets this matrix to the identity matrix.
         * Where all values are zero except those along the diagonal which are one.
         * 
         */
        public loadIdentity() {
            this.m01 = this.m02 = this.m10 = this.m12 = this.m20 = this.m21 = 0;
            this.m00 = this.m11 = this.m22 = 1;
        }

        /**
         * @return true if this matrix is identity
         */
        public isIdentity() : boolean {
            return (this.m00 === 1 && this.m01 === 0 && this.m02 === 0) && (this.m10 === 0 && this.m11 === 1 && this.m12 === 0) && (this.m20 === 0 && this.m21 === 0 && this.m22 === 1);
        }

        /**
         * <code>fromAngleAxis</code> sets this matrix4f to the values specified
         * by an angle and an axis of rotation.  This method creates an object, so
         * use fromAngleNormalAxis if your axis is already normalized.
         * 
         * @param angle
         * the angle to rotate (in radians).
         * @param axis
         * the axis of rotation.
         */
        public fromAngleAxis(angle : number, axis : Vector3f) {
            let normAxis : Vector3f = axis.normalize();
            this.fromAngleNormalAxis(angle, normAxis);
        }

        /**
         * <code>fromAngleNormalAxis</code> sets this matrix4f to the values
         * specified by an angle and a normalized axis of rotation.
         * 
         * @param angle
         * the angle to rotate (in radians).
         * @param axis
         * the axis of rotation (already normalized).
         */
        public fromAngleNormalAxis(angle : number, axis : Vector3f) {
            let fCos : number = FastMath.cos(angle);
            let fSin : number = FastMath.sin(angle);
            let fOneMinusCos : number = (<number>1.0) - fCos;
            let fX2 : number = axis.x * axis.x;
            let fY2 : number = axis.y * axis.y;
            let fZ2 : number = axis.z * axis.z;
            let fXYM : number = axis.x * axis.y * fOneMinusCos;
            let fXZM : number = axis.x * axis.z * fOneMinusCos;
            let fYZM : number = axis.y * axis.z * fOneMinusCos;
            let fXSin : number = axis.x * fSin;
            let fYSin : number = axis.y * fSin;
            let fZSin : number = axis.z * fSin;
            this.m00 = fX2 * fOneMinusCos + fCos;
            this.m01 = fXYM - fZSin;
            this.m02 = fXZM + fYSin;
            this.m10 = fXYM + fZSin;
            this.m11 = fY2 * fOneMinusCos + fCos;
            this.m12 = fYZM - fXSin;
            this.m20 = fXZM - fYSin;
            this.m21 = fYZM + fXSin;
            this.m22 = fZ2 * fOneMinusCos + fCos;
        }

        /**
         * <code>mult</code> multiplies this matrix by a given matrix. The result
         * matrix is returned as a new object. If the given matrix is null, a null
         * matrix is returned.
         * 
         * @param mat
         * the matrix to multiply this matrix by.
         * @return the result matrix.
         */
        public mult$com_jme3_math_Matrix3f(mat : Matrix3f) : Matrix3f {
            return this.mult(mat, null);
        }

        /**
         * <code>mult</code> multiplies this matrix by a given matrix. The result
         * matrix is returned as a new object.
         * 
         * @param mat
         * the matrix to multiply this matrix by.
         * @param product
         * the matrix to store the result in. if null, a new matrix3f is
         * created.  It is safe for mat and product to be the same object.
         * @return a matrix3f object containing the result of this operation
         */
        public mult(mat? : any, product? : any) : any {
            if(((mat != null && mat instanceof com.jme3.math.Matrix3f) || mat === null) && ((product != null && product instanceof com.jme3.math.Matrix3f) || product === null)) {
                let __args = Array.prototype.slice.call(arguments);
                return <any>(() => {
                    let temp00 : number;
                    let temp01 : number;
                    let temp02 : number;
                    let temp10 : number;
                    let temp11 : number;
                    let temp12 : number;
                    let temp20 : number;
                    let temp21 : number;
                    let temp22 : number;
                    if(product == null) {
                        product = new Matrix3f();
                    }
                    temp00 = this.m00 * mat.m00 + this.m01 * mat.m10 + this.m02 * mat.m20;
                    temp01 = this.m00 * mat.m01 + this.m01 * mat.m11 + this.m02 * mat.m21;
                    temp02 = this.m00 * mat.m02 + this.m01 * mat.m12 + this.m02 * mat.m22;
                    temp10 = this.m10 * mat.m00 + this.m11 * mat.m10 + this.m12 * mat.m20;
                    temp11 = this.m10 * mat.m01 + this.m11 * mat.m11 + this.m12 * mat.m21;
                    temp12 = this.m10 * mat.m02 + this.m11 * mat.m12 + this.m12 * mat.m22;
                    temp20 = this.m20 * mat.m00 + this.m21 * mat.m10 + this.m22 * mat.m20;
                    temp21 = this.m20 * mat.m01 + this.m21 * mat.m11 + this.m22 * mat.m21;
                    temp22 = this.m20 * mat.m02 + this.m21 * mat.m12 + this.m22 * mat.m22;
                    product.m00 = temp00;
                    product.m01 = temp01;
                    product.m02 = temp02;
                    product.m10 = temp10;
                    product.m11 = temp11;
                    product.m12 = temp12;
                    product.m20 = temp20;
                    product.m21 = temp21;
                    product.m22 = temp22;
                    return product;
                })();
            } else if(((mat != null && mat instanceof com.jme3.math.Vector3f) || mat === null) && ((product != null && product instanceof com.jme3.math.Vector3f) || product === null)) {
                return <any>this.mult$com_jme3_math_Vector3f$com_jme3_math_Vector3f(mat, product);
            } else if(((mat != null && mat instanceof com.jme3.math.Matrix3f) || mat === null) && product === undefined) {
                return <any>this.mult$com_jme3_math_Matrix3f(mat);
            } else if(((mat != null && mat instanceof com.jme3.math.Vector3f) || mat === null) && product === undefined) {
                return <any>this.mult$com_jme3_math_Vector3f(mat);
            } else throw new Error('invalid overload');
        }

        /**
         * <code>mult</code> multiplies this matrix by a given
         * <code>Vector3f</code> object. The result vector is returned. If the
         * given vector is null, null will be returned.
         * 
         * @param vec
         * the vector to multiply this matrix by.
         * @return the result vector.
         */
        public mult$com_jme3_math_Vector3f(vec : Vector3f) : Vector3f {
            return this.mult(vec, null);
        }

        /**
         * Multiplies this 3x3 matrix by the 1x3 Vector vec and stores the result in
         * product.
         * 
         * @param vec
         * The Vector3f to multiply.
         * @param product
         * The Vector3f to store the result, it is safe for this to be
         * the same as vec.
         * @return The given product vector.
         */
        public mult$com_jme3_math_Vector3f$com_jme3_math_Vector3f(vec : Vector3f, product : Vector3f) : Vector3f {
            if(null == product) {
                product = new Vector3f();
            }
            let x : number = vec.x;
            let y : number = vec.y;
            let z : number = vec.z;
            product.x = this.m00 * x + this.m01 * y + this.m02 * z;
            product.y = this.m10 * x + this.m11 * y + this.m12 * z;
            product.z = this.m20 * x + this.m21 * y + this.m22 * z;
            return product;
        }

        /**
         * <code>multLocal</code> multiplies this matrix internally by
         * a given float scale factor.
         * 
         * @param scale
         * the value to scale by.
         * @return this Matrix3f
         */
        public multLocal$float(scale : number) : Matrix3f {
            this.m00 *= scale;
            this.m01 *= scale;
            this.m02 *= scale;
            this.m10 *= scale;
            this.m11 *= scale;
            this.m12 *= scale;
            this.m20 *= scale;
            this.m21 *= scale;
            this.m22 *= scale;
            return this;
        }

        /**
         * <code>multLocal</code> multiplies this matrix by a given
         * <code>Vector3f</code> object. The result vector is stored inside the
         * passed vector, then returned . If the given vector is null, null will be
         * returned.
         * 
         * @param vec
         * the vector to multiply this matrix by.
         * @return The passed vector after multiplication
         */
        public multLocal(vec? : any) : any {
            if(((vec != null && vec instanceof com.jme3.math.Vector3f) || vec === null)) {
                let __args = Array.prototype.slice.call(arguments);
                return <any>(() => {
                    if(vec == null) {
                        return null;
                    }
                    let x : number = vec.x;
                    let y : number = vec.y;
                    vec.x = this.m00 * x + this.m01 * y + this.m02 * vec.z;
                    vec.y = this.m10 * x + this.m11 * y + this.m12 * vec.z;
                    vec.z = this.m20 * x + this.m21 * y + this.m22 * vec.z;
                    return vec;
                })();
            } else if(((vec != null && vec instanceof com.jme3.math.Matrix3f) || vec === null)) {
                return <any>this.multLocal$com_jme3_math_Matrix3f(vec);
            } else if(((typeof vec === 'number') || vec === null)) {
                return <any>this.multLocal$float(vec);
            } else throw new Error('invalid overload');
        }

        /**
         * <code>mult</code> multiplies this matrix by a given matrix. The result
         * matrix is saved in the current matrix. If the given matrix is null,
         * nothing happens. The current matrix is returned. This is equivalent to
         * this*=mat
         * 
         * @param mat
         * the matrix to multiply this matrix by.
         * @return This matrix, after the multiplication
         */
        public multLocal$com_jme3_math_Matrix3f(mat : Matrix3f) : Matrix3f {
            return this.mult(mat, this);
        }

        /**
         * Transposes this matrix in place. Returns this matrix for chaining
         * 
         * @return This matrix after transpose
         */
        public transposeLocal() : Matrix3f {
            let tmp : number = this.m01;
            this.m01 = this.m10;
            this.m10 = tmp;
            tmp = this.m02;
            this.m02 = this.m20;
            this.m20 = tmp;
            tmp = this.m12;
            this.m12 = this.m21;
            this.m21 = tmp;
            return this;
        }

        /**
         * Inverts this matrix and stores it in the given store.
         * 
         * @return The store
         */
        public invert(store : Matrix3f = null) : Matrix3f {
            if(store == null) {
                store = new Matrix3f();
            }
            let det : number = this.determinant();
            if(FastMath.abs(det) <= FastMath.FLT_EPSILON) {
                return store.zero();
            }
            store.m00 = this.m11 * this.m22 - this.m12 * this.m21;
            store.m01 = this.m02 * this.m21 - this.m01 * this.m22;
            store.m02 = this.m01 * this.m12 - this.m02 * this.m11;
            store.m10 = this.m12 * this.m20 - this.m10 * this.m22;
            store.m11 = this.m00 * this.m22 - this.m02 * this.m20;
            store.m12 = this.m02 * this.m10 - this.m00 * this.m12;
            store.m20 = this.m10 * this.m21 - this.m11 * this.m20;
            store.m21 = this.m01 * this.m20 - this.m00 * this.m21;
            store.m22 = this.m00 * this.m11 - this.m01 * this.m10;
            store.multLocal(1.0 / det);
            return store;
        }

        /**
         * Inverts this matrix locally.
         * 
         * @return this
         */
        public invertLocal() : Matrix3f {
            let det : number = this.determinant();
            if(FastMath.abs(det) <= 0.0) {
                return this.zero();
            }
            let f00 : number = this.m11 * this.m22 - this.m12 * this.m21;
            let f01 : number = this.m02 * this.m21 - this.m01 * this.m22;
            let f02 : number = this.m01 * this.m12 - this.m02 * this.m11;
            let f10 : number = this.m12 * this.m20 - this.m10 * this.m22;
            let f11 : number = this.m00 * this.m22 - this.m02 * this.m20;
            let f12 : number = this.m02 * this.m10 - this.m00 * this.m12;
            let f20 : number = this.m10 * this.m21 - this.m11 * this.m20;
            let f21 : number = this.m01 * this.m20 - this.m00 * this.m21;
            let f22 : number = this.m00 * this.m11 - this.m01 * this.m10;
            this.m00 = f00;
            this.m01 = f01;
            this.m02 = f02;
            this.m10 = f10;
            this.m11 = f11;
            this.m12 = f12;
            this.m20 = f20;
            this.m21 = f21;
            this.m22 = f22;
            this.multLocal(1.0 / det);
            return this;
        }

        /**
         * Places the adjoint of this matrix in store (creates store if null.)
         * 
         * @param store
         * The matrix to store the result in.  If null, a new matrix is created.
         * @return store
         */
        public adjoint(store : Matrix3f = null) : Matrix3f {
            if(store == null) {
                store = new Matrix3f();
            }
            store.m00 = this.m11 * this.m22 - this.m12 * this.m21;
            store.m01 = this.m02 * this.m21 - this.m01 * this.m22;
            store.m02 = this.m01 * this.m12 - this.m02 * this.m11;
            store.m10 = this.m12 * this.m20 - this.m10 * this.m22;
            store.m11 = this.m00 * this.m22 - this.m02 * this.m20;
            store.m12 = this.m02 * this.m10 - this.m00 * this.m12;
            store.m20 = this.m10 * this.m21 - this.m11 * this.m20;
            store.m21 = this.m01 * this.m20 - this.m00 * this.m21;
            store.m22 = this.m00 * this.m11 - this.m01 * this.m10;
            return store;
        }

        /**
         * <code>determinant</code> generates the determinant of this matrix.
         * 
         * @return the determinant
         */
        public determinant() : number {
            let fCo00 : number = this.m11 * this.m22 - this.m12 * this.m21;
            let fCo10 : number = this.m12 * this.m20 - this.m10 * this.m22;
            let fCo20 : number = this.m10 * this.m21 - this.m11 * this.m20;
            let fDet : number = this.m00 * fCo00 + this.m01 * fCo10 + this.m02 * fCo20;
            return fDet;
        }

        /**
         * Sets all of the values in this matrix to zero.
         * 
         * @return this matrix
         */
        public zero() : Matrix3f {
            this.m00 = this.m01 = this.m02 = this.m10 = this.m11 = this.m12 = this.m20 = this.m21 = this.m22 = 0.0;
            return this;
        }

        /**
         * <code>transpose</code> <b>locally</b> transposes this Matrix.
         * This is inconsistent with general value vs local semantics, but is
         * preserved for backwards compatibility. Use transposeNew() to transpose
         * to a new object (value).
         * 
         * @return this object for chaining.
         */
        public transpose() : Matrix3f {
            return this.transposeLocal();
        }

        /**
         * <code>transposeNew</code> returns a transposed version of this matrix.
         * 
         * @return The new Matrix3f object.
         */
        public transposeNew() : Matrix3f {
            let ret : Matrix3f = new Matrix3f(this.m00, this.m10, this.m20, this.m01, this.m11, this.m21, this.m02, this.m12, this.m22);
            return ret;
        }

        /**
         * <code>toString</code> returns the string representation of this object.
         * It is in a format of a 3x3 matrix. For example, an identity matrix would
         * be represented by the following string. com.jme.math.Matrix3f <br>[<br>
         * 1.0  0.0  0.0 <br>
         * 0.0  1.0  0.0 <br>
         * 0.0  0.0  1.0 <br>]<br>
         * 
         * @return the string representation of this object.
         */
        public toString() : string {
            let result : java.lang.StringBuilder = new java.lang.StringBuilder("Matrix3f\n[\n");
            result.append(" ");
            result.append(this.m00);
            result.append("  ");
            result.append(this.m01);
            result.append("  ");
            result.append(this.m02);
            result.append(" \n");
            result.append(" ");
            result.append(this.m10);
            result.append("  ");
            result.append(this.m11);
            result.append("  ");
            result.append(this.m12);
            result.append(" \n");
            result.append(" ");
            result.append(this.m20);
            result.append("  ");
            result.append(this.m21);
            result.append("  ");
            result.append(this.m22);
            result.append(" \n]");
            return result.toString();
        }

        /**
         * 
         * <code>hashCode</code> returns the hash code value as an integer and is
         * supported for the benefit of hashing based collection classes such as
         * Hashtable, HashMap, HashSet etc.
         * 
         * @return the hashcode for this instance of Matrix4f.
         * @see java.lang.Object#hashCode()
         */
        public hashCode() : number {
            let hash : number = 37;
            hash = 37 * hash + javaemul.internal.FloatHelper.floatToIntBits(this.m00);
            hash = 37 * hash + javaemul.internal.FloatHelper.floatToIntBits(this.m01);
            hash = 37 * hash + javaemul.internal.FloatHelper.floatToIntBits(this.m02);
            hash = 37 * hash + javaemul.internal.FloatHelper.floatToIntBits(this.m10);
            hash = 37 * hash + javaemul.internal.FloatHelper.floatToIntBits(this.m11);
            hash = 37 * hash + javaemul.internal.FloatHelper.floatToIntBits(this.m12);
            hash = 37 * hash + javaemul.internal.FloatHelper.floatToIntBits(this.m20);
            hash = 37 * hash + javaemul.internal.FloatHelper.floatToIntBits(this.m21);
            hash = 37 * hash + javaemul.internal.FloatHelper.floatToIntBits(this.m22);
            return hash;
        }

        /**
         * are these two matrices the same? they are is they both have the same mXX values.
         * 
         * @param o
         * the object to compare for equality
         * @return true if they are equal
         */
        public equals(o : any) : boolean {
            if(!(o != null && o instanceof com.jme3.math.Matrix3f) || o == null) {
                return false;
            }
            if(this === o) {
                return true;
            }
            let comp : Matrix3f = <Matrix3f>o;
            if(javaemul.internal.FloatHelper.compare(this.m00, comp.m00) !== 0) {
                return false;
            }
            if(javaemul.internal.FloatHelper.compare(this.m01, comp.m01) !== 0) {
                return false;
            }
            if(javaemul.internal.FloatHelper.compare(this.m02, comp.m02) !== 0) {
                return false;
            }
            if(javaemul.internal.FloatHelper.compare(this.m10, comp.m10) !== 0) {
                return false;
            }
            if(javaemul.internal.FloatHelper.compare(this.m11, comp.m11) !== 0) {
                return false;
            }
            if(javaemul.internal.FloatHelper.compare(this.m12, comp.m12) !== 0) {
                return false;
            }
            if(javaemul.internal.FloatHelper.compare(this.m20, comp.m20) !== 0) {
                return false;
            }
            if(javaemul.internal.FloatHelper.compare(this.m21, comp.m21) !== 0) {
                return false;
            }
            if(javaemul.internal.FloatHelper.compare(this.m22, comp.m22) !== 0) {
                return false;
            }
            return true;
        }

        public write(e : JmeExporter) {
            let cap : OutputCapsule = e.getCapsule(this);
            cap.write(this.m00, "m00", 1);
            cap.write(this.m01, "m01", 0);
            cap.write(this.m02, "m02", 0);
            cap.write(this.m10, "m10", 0);
            cap.write(this.m11, "m11", 1);
            cap.write(this.m12, "m12", 0);
            cap.write(this.m20, "m20", 0);
            cap.write(this.m21, "m21", 0);
            cap.write(this.m22, "m22", 1);
        }

        public read(e : JmeImporter) {
            let cap : InputCapsule = e.getCapsule(this);
            this.m00 = cap.readFloat("m00", 1);
            this.m01 = cap.readFloat("m01", 0);
            this.m02 = cap.readFloat("m02", 0);
            this.m10 = cap.readFloat("m10", 0);
            this.m11 = cap.readFloat("m11", 1);
            this.m12 = cap.readFloat("m12", 0);
            this.m20 = cap.readFloat("m20", 0);
            this.m21 = cap.readFloat("m21", 0);
            this.m22 = cap.readFloat("m22", 1);
        }

        /**
         * A function for creating a rotation matrix that rotates a vector called
         * "start" into another vector called "end".
         * 
         * @param start
         * normalized non-zero starting vector
         * @param end
         * normalized non-zero ending vector
         * @see "Tomas M?ller, John Hughes \"Efficiently Building a Matrix to Rotate \
         * One Vector to Another\" Journal of Graphics Tools, 4(4):1-4, 1999"
         */
        public fromStartEndVectors(start : Vector3f, end : Vector3f) {
            let v : Vector3f = new Vector3f();
            let e : number;
            let h : number;
            let f : number;
            start.cross(end, v);
            e = start.dot(end);
            f = (e < 0)?-e:e;
            if(f > 1.0 - FastMath.ZERO_TOLERANCE) {
                let u : Vector3f = new Vector3f();
                let x : Vector3f = new Vector3f();
                let c1 : number;
                let c2 : number;
                let c3 : number;
                let i : number;
                let j : number;
                x.x = (start.x > 0.0)?start.x:-start.x;
                x.y = (start.y > 0.0)?start.y:-start.y;
                x.z = (start.z > 0.0)?start.z:-start.z;
                if(x.x < x.y) {
                    if(x.x < x.z) {
                        x.x = 1.0;
                        x.y = x.z = 0.0;
                    } else {
                        x.z = 1.0;
                        x.x = x.y = 0.0;
                    }
                } else {
                    if(x.y < x.z) {
                        x.y = 1.0;
                        x.x = x.z = 0.0;
                    } else {
                        x.z = 1.0;
                        x.x = x.y = 0.0;
                    }
                }
                u.x = x.x - start.x;
                u.y = x.y - start.y;
                u.z = x.z - start.z;
                v.x = x.x - end.x;
                v.y = x.y - end.y;
                v.z = x.z - end.z;
                c1 = 2.0 / u.dot(u);
                c2 = 2.0 / v.dot(v);
                c3 = c1 * c2 * u.dot(v);
                for(i = 0; i < 3; i++) {
                    for(j = 0; j < 3; j++) {
                        let val : number = -c1 * u.get(i) * u.get(j) - c2 * v.get(i) * v.get(j) + c3 * v.get(i) * u.get(j);
                        this.set(i, j, val);
                    }
                    let val : number = this.get(i, i);
                    this.set(i, i, val + 1.0);
                }
            } else {
                let hvx : number;
                let hvz : number;
                let hvxy : number;
                let hvxz : number;
                let hvyz : number;
                h = 1.0 / (1.0 + e);
                hvx = h * v.x;
                hvz = h * v.z;
                hvxy = hvx * v.y;
                hvxz = hvx * v.z;
                hvyz = hvz * v.y;
                this.set(0, 0, e + hvx * v.x);
                this.set(0, 1, hvxy - v.z);
                this.set(0, 2, hvxz + v.y);
                this.set(1, 0, hvxy + v.z);
                this.set(1, 1, e + h * v.y * v.y);
                this.set(1, 2, hvyz - v.x);
                this.set(2, 0, hvxz - v.y);
                this.set(2, 1, hvyz + v.x);
                this.set(2, 2, e + hvz * v.z);
            }
        }

        /**
         * <code>scale</code> scales the operation performed by this matrix on a
         * per-component basis.
         * 
         * @param scale
         * The scale applied to each of the X, Y and Z output values.
         */
        public scale(scale : Vector3f) {
            this.m00 *= scale.x;
            this.m10 *= scale.x;
            this.m20 *= scale.x;
            this.m01 *= scale.y;
            this.m11 *= scale.y;
            this.m21 *= scale.y;
            this.m02 *= scale.z;
            this.m12 *= scale.z;
            this.m22 *= scale.z;
        }

        static equalIdentity(mat : Matrix3f) : boolean {
            if(Math.abs(mat.m00 - 1) > 1.0E-4) {
                return false;
            }
            if(Math.abs(mat.m11 - 1) > 1.0E-4) {
                return false;
            }
            if(Math.abs(mat.m22 - 1) > 1.0E-4) {
                return false;
            }
            if(Math.abs(mat.m01) > 1.0E-4) {
                return false;
            }
            if(Math.abs(mat.m02) > 1.0E-4) {
                return false;
            }
            if(Math.abs(mat.m10) > 1.0E-4) {
                return false;
            }
            if(Math.abs(mat.m12) > 1.0E-4) {
                return false;
            }
            if(Math.abs(mat.m20) > 1.0E-4) {
                return false;
            }
            if(Math.abs(mat.m21) > 1.0E-4) {
                return false;
            }
            return true;
        }

        public clone() : Matrix3f {
            try {
                return <Matrix3f>javaemul.internal.ObjectHelper.clone(this);
            } catch(e) {
                throw new java.lang.AssertionError();
            };
        }
    }
    Matrix3f["__class"] = "com.jme3.math.Matrix3f";
    Matrix3f["__interfaces"] = ["java.lang.Cloneable","com.jme3.export.Savable","java.io.Serializable"];


}


com.jme3.math.Matrix3f.IDENTITY_$LI$();

com.jme3.math.Matrix3f.ZERO_$LI$();

com.jme3.math.Matrix3f.logger_$LI$();
