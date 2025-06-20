
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DomainStat
 * 
 */
export type DomainStat = $Result.DefaultSelection<Prisma.$DomainStatPayload>
/**
 * Model PageVisit
 * 
 */
export type PageVisit = $Result.DefaultSelection<Prisma.$PageVisitPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.domainStat`: Exposes CRUD operations for the **DomainStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DomainStats
    * const domainStats = await prisma.domainStat.findMany()
    * ```
    */
  get domainStat(): Prisma.DomainStatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageVisit`: Exposes CRUD operations for the **PageVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageVisits
    * const pageVisits = await prisma.pageVisit.findMany()
    * ```
    */
  get pageVisit(): Prisma.PageVisitDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    DomainStat: 'DomainStat',
    PageVisit: 'PageVisit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "domainStat" | "pageVisit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DomainStat: {
        payload: Prisma.$DomainStatPayload<ExtArgs>
        fields: Prisma.DomainStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload>
          }
          findFirst: {
            args: Prisma.DomainStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload>
          }
          findMany: {
            args: Prisma.DomainStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload>[]
          }
          create: {
            args: Prisma.DomainStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload>
          }
          createMany: {
            args: Prisma.DomainStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomainStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload>[]
          }
          delete: {
            args: Prisma.DomainStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload>
          }
          update: {
            args: Prisma.DomainStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload>
          }
          deleteMany: {
            args: Prisma.DomainStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DomainStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DomainStatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload>[]
          }
          upsert: {
            args: Prisma.DomainStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainStatPayload>
          }
          aggregate: {
            args: Prisma.DomainStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDomainStat>
          }
          groupBy: {
            args: Prisma.DomainStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<DomainStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainStatCountArgs<ExtArgs>
            result: $Utils.Optional<DomainStatCountAggregateOutputType> | number
          }
        }
      }
      PageVisit: {
        payload: Prisma.$PageVisitPayload<ExtArgs>
        fields: Prisma.PageVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          findFirst: {
            args: Prisma.PageVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          findMany: {
            args: Prisma.PageVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>[]
          }
          create: {
            args: Prisma.PageVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          createMany: {
            args: Prisma.PageVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>[]
          }
          delete: {
            args: Prisma.PageVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          update: {
            args: Prisma.PageVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          deleteMany: {
            args: Prisma.PageVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageVisitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>[]
          }
          upsert: {
            args: Prisma.PageVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageVisitPayload>
          }
          aggregate: {
            args: Prisma.PageVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageVisit>
          }
          groupBy: {
            args: Prisma.PageVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageVisitCountArgs<ExtArgs>
            result: $Utils.Optional<PageVisitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    domainStat?: DomainStatOmit
    pageVisit?: PageVisitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DomainStatCountOutputType
   */

  export type DomainStatCountOutputType = {
    pageVisits: number
  }

  export type DomainStatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageVisits?: boolean | DomainStatCountOutputTypeCountPageVisitsArgs
  }

  // Custom InputTypes
  /**
   * DomainStatCountOutputType without action
   */
  export type DomainStatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStatCountOutputType
     */
    select?: DomainStatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DomainStatCountOutputType without action
   */
  export type DomainStatCountOutputTypeCountPageVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageVisitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model DomainStat
   */

  export type AggregateDomainStat = {
    _count: DomainStatCountAggregateOutputType | null
    _avg: DomainStatAvgAggregateOutputType | null
    _sum: DomainStatSumAggregateOutputType | null
    _min: DomainStatMinAggregateOutputType | null
    _max: DomainStatMaxAggregateOutputType | null
  }

  export type DomainStatAvgAggregateOutputType = {
    id: number | null
    totalTimeSpentSeconds: number | null
  }

  export type DomainStatSumAggregateOutputType = {
    id: number | null
    totalTimeSpentSeconds: number | null
  }

  export type DomainStatMinAggregateOutputType = {
    id: number | null
    name: string | null
    totalTimeSpentSeconds: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DomainStatMaxAggregateOutputType = {
    id: number | null
    name: string | null
    totalTimeSpentSeconds: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DomainStatCountAggregateOutputType = {
    id: number
    name: number
    totalTimeSpentSeconds: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DomainStatAvgAggregateInputType = {
    id?: true
    totalTimeSpentSeconds?: true
  }

  export type DomainStatSumAggregateInputType = {
    id?: true
    totalTimeSpentSeconds?: true
  }

  export type DomainStatMinAggregateInputType = {
    id?: true
    name?: true
    totalTimeSpentSeconds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DomainStatMaxAggregateInputType = {
    id?: true
    name?: true
    totalTimeSpentSeconds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DomainStatCountAggregateInputType = {
    id?: true
    name?: true
    totalTimeSpentSeconds?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DomainStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DomainStat to aggregate.
     */
    where?: DomainStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainStats to fetch.
     */
    orderBy?: DomainStatOrderByWithRelationInput | DomainStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DomainStats
    **/
    _count?: true | DomainStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DomainStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DomainStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainStatMaxAggregateInputType
  }

  export type GetDomainStatAggregateType<T extends DomainStatAggregateArgs> = {
        [P in keyof T & keyof AggregateDomainStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomainStat[P]>
      : GetScalarType<T[P], AggregateDomainStat[P]>
  }




  export type DomainStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainStatWhereInput
    orderBy?: DomainStatOrderByWithAggregationInput | DomainStatOrderByWithAggregationInput[]
    by: DomainStatScalarFieldEnum[] | DomainStatScalarFieldEnum
    having?: DomainStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainStatCountAggregateInputType | true
    _avg?: DomainStatAvgAggregateInputType
    _sum?: DomainStatSumAggregateInputType
    _min?: DomainStatMinAggregateInputType
    _max?: DomainStatMaxAggregateInputType
  }

  export type DomainStatGroupByOutputType = {
    id: number
    name: string
    totalTimeSpentSeconds: number
    createdAt: Date
    updatedAt: Date
    _count: DomainStatCountAggregateOutputType | null
    _avg: DomainStatAvgAggregateOutputType | null
    _sum: DomainStatSumAggregateOutputType | null
    _min: DomainStatMinAggregateOutputType | null
    _max: DomainStatMaxAggregateOutputType | null
  }

  type GetDomainStatGroupByPayload<T extends DomainStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainStatGroupByOutputType[P]>
            : GetScalarType<T[P], DomainStatGroupByOutputType[P]>
        }
      >
    >


  export type DomainStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalTimeSpentSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pageVisits?: boolean | DomainStat$pageVisitsArgs<ExtArgs>
    _count?: boolean | DomainStatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domainStat"]>

  export type DomainStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalTimeSpentSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["domainStat"]>

  export type DomainStatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    totalTimeSpentSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["domainStat"]>

  export type DomainStatSelectScalar = {
    id?: boolean
    name?: boolean
    totalTimeSpentSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DomainStatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "totalTimeSpentSeconds" | "createdAt" | "updatedAt", ExtArgs["result"]["domainStat"]>
  export type DomainStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pageVisits?: boolean | DomainStat$pageVisitsArgs<ExtArgs>
    _count?: boolean | DomainStatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DomainStatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DomainStatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DomainStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DomainStat"
    objects: {
      pageVisits: Prisma.$PageVisitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      totalTimeSpentSeconds: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["domainStat"]>
    composites: {}
  }

  type DomainStatGetPayload<S extends boolean | null | undefined | DomainStatDefaultArgs> = $Result.GetResult<Prisma.$DomainStatPayload, S>

  type DomainStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DomainStatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DomainStatCountAggregateInputType | true
    }

  export interface DomainStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DomainStat'], meta: { name: 'DomainStat' } }
    /**
     * Find zero or one DomainStat that matches the filter.
     * @param {DomainStatFindUniqueArgs} args - Arguments to find a DomainStat
     * @example
     * // Get one DomainStat
     * const domainStat = await prisma.domainStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DomainStatFindUniqueArgs>(args: SelectSubset<T, DomainStatFindUniqueArgs<ExtArgs>>): Prisma__DomainStatClient<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DomainStat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DomainStatFindUniqueOrThrowArgs} args - Arguments to find a DomainStat
     * @example
     * // Get one DomainStat
     * const domainStat = await prisma.domainStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DomainStatFindUniqueOrThrowArgs>(args: SelectSubset<T, DomainStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DomainStatClient<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DomainStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainStatFindFirstArgs} args - Arguments to find a DomainStat
     * @example
     * // Get one DomainStat
     * const domainStat = await prisma.domainStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DomainStatFindFirstArgs>(args?: SelectSubset<T, DomainStatFindFirstArgs<ExtArgs>>): Prisma__DomainStatClient<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DomainStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainStatFindFirstOrThrowArgs} args - Arguments to find a DomainStat
     * @example
     * // Get one DomainStat
     * const domainStat = await prisma.domainStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DomainStatFindFirstOrThrowArgs>(args?: SelectSubset<T, DomainStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__DomainStatClient<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DomainStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DomainStats
     * const domainStats = await prisma.domainStat.findMany()
     * 
     * // Get first 10 DomainStats
     * const domainStats = await prisma.domainStat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainStatWithIdOnly = await prisma.domainStat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DomainStatFindManyArgs>(args?: SelectSubset<T, DomainStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DomainStat.
     * @param {DomainStatCreateArgs} args - Arguments to create a DomainStat.
     * @example
     * // Create one DomainStat
     * const DomainStat = await prisma.domainStat.create({
     *   data: {
     *     // ... data to create a DomainStat
     *   }
     * })
     * 
     */
    create<T extends DomainStatCreateArgs>(args: SelectSubset<T, DomainStatCreateArgs<ExtArgs>>): Prisma__DomainStatClient<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DomainStats.
     * @param {DomainStatCreateManyArgs} args - Arguments to create many DomainStats.
     * @example
     * // Create many DomainStats
     * const domainStat = await prisma.domainStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DomainStatCreateManyArgs>(args?: SelectSubset<T, DomainStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DomainStats and returns the data saved in the database.
     * @param {DomainStatCreateManyAndReturnArgs} args - Arguments to create many DomainStats.
     * @example
     * // Create many DomainStats
     * const domainStat = await prisma.domainStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DomainStats and only return the `id`
     * const domainStatWithIdOnly = await prisma.domainStat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DomainStatCreateManyAndReturnArgs>(args?: SelectSubset<T, DomainStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DomainStat.
     * @param {DomainStatDeleteArgs} args - Arguments to delete one DomainStat.
     * @example
     * // Delete one DomainStat
     * const DomainStat = await prisma.domainStat.delete({
     *   where: {
     *     // ... filter to delete one DomainStat
     *   }
     * })
     * 
     */
    delete<T extends DomainStatDeleteArgs>(args: SelectSubset<T, DomainStatDeleteArgs<ExtArgs>>): Prisma__DomainStatClient<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DomainStat.
     * @param {DomainStatUpdateArgs} args - Arguments to update one DomainStat.
     * @example
     * // Update one DomainStat
     * const domainStat = await prisma.domainStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DomainStatUpdateArgs>(args: SelectSubset<T, DomainStatUpdateArgs<ExtArgs>>): Prisma__DomainStatClient<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DomainStats.
     * @param {DomainStatDeleteManyArgs} args - Arguments to filter DomainStats to delete.
     * @example
     * // Delete a few DomainStats
     * const { count } = await prisma.domainStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DomainStatDeleteManyArgs>(args?: SelectSubset<T, DomainStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DomainStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DomainStats
     * const domainStat = await prisma.domainStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DomainStatUpdateManyArgs>(args: SelectSubset<T, DomainStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DomainStats and returns the data updated in the database.
     * @param {DomainStatUpdateManyAndReturnArgs} args - Arguments to update many DomainStats.
     * @example
     * // Update many DomainStats
     * const domainStat = await prisma.domainStat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DomainStats and only return the `id`
     * const domainStatWithIdOnly = await prisma.domainStat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DomainStatUpdateManyAndReturnArgs>(args: SelectSubset<T, DomainStatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DomainStat.
     * @param {DomainStatUpsertArgs} args - Arguments to update or create a DomainStat.
     * @example
     * // Update or create a DomainStat
     * const domainStat = await prisma.domainStat.upsert({
     *   create: {
     *     // ... data to create a DomainStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DomainStat we want to update
     *   }
     * })
     */
    upsert<T extends DomainStatUpsertArgs>(args: SelectSubset<T, DomainStatUpsertArgs<ExtArgs>>): Prisma__DomainStatClient<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DomainStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainStatCountArgs} args - Arguments to filter DomainStats to count.
     * @example
     * // Count the number of DomainStats
     * const count = await prisma.domainStat.count({
     *   where: {
     *     // ... the filter for the DomainStats we want to count
     *   }
     * })
    **/
    count<T extends DomainStatCountArgs>(
      args?: Subset<T, DomainStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DomainStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DomainStatAggregateArgs>(args: Subset<T, DomainStatAggregateArgs>): Prisma.PrismaPromise<GetDomainStatAggregateType<T>>

    /**
     * Group by DomainStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DomainStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainStatGroupByArgs['orderBy'] }
        : { orderBy?: DomainStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DomainStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DomainStat model
   */
  readonly fields: DomainStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DomainStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pageVisits<T extends DomainStat$pageVisitsArgs<ExtArgs> = {}>(args?: Subset<T, DomainStat$pageVisitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DomainStat model
   */
  interface DomainStatFieldRefs {
    readonly id: FieldRef<"DomainStat", 'Int'>
    readonly name: FieldRef<"DomainStat", 'String'>
    readonly totalTimeSpentSeconds: FieldRef<"DomainStat", 'Int'>
    readonly createdAt: FieldRef<"DomainStat", 'DateTime'>
    readonly updatedAt: FieldRef<"DomainStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DomainStat findUnique
   */
  export type DomainStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainStatInclude<ExtArgs> | null
    /**
     * Filter, which DomainStat to fetch.
     */
    where: DomainStatWhereUniqueInput
  }

  /**
   * DomainStat findUniqueOrThrow
   */
  export type DomainStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainStatInclude<ExtArgs> | null
    /**
     * Filter, which DomainStat to fetch.
     */
    where: DomainStatWhereUniqueInput
  }

  /**
   * DomainStat findFirst
   */
  export type DomainStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainStatInclude<ExtArgs> | null
    /**
     * Filter, which DomainStat to fetch.
     */
    where?: DomainStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainStats to fetch.
     */
    orderBy?: DomainStatOrderByWithRelationInput | DomainStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DomainStats.
     */
    cursor?: DomainStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DomainStats.
     */
    distinct?: DomainStatScalarFieldEnum | DomainStatScalarFieldEnum[]
  }

  /**
   * DomainStat findFirstOrThrow
   */
  export type DomainStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainStatInclude<ExtArgs> | null
    /**
     * Filter, which DomainStat to fetch.
     */
    where?: DomainStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainStats to fetch.
     */
    orderBy?: DomainStatOrderByWithRelationInput | DomainStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DomainStats.
     */
    cursor?: DomainStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DomainStats.
     */
    distinct?: DomainStatScalarFieldEnum | DomainStatScalarFieldEnum[]
  }

  /**
   * DomainStat findMany
   */
  export type DomainStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainStatInclude<ExtArgs> | null
    /**
     * Filter, which DomainStats to fetch.
     */
    where?: DomainStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DomainStats to fetch.
     */
    orderBy?: DomainStatOrderByWithRelationInput | DomainStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DomainStats.
     */
    cursor?: DomainStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DomainStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DomainStats.
     */
    skip?: number
    distinct?: DomainStatScalarFieldEnum | DomainStatScalarFieldEnum[]
  }

  /**
   * DomainStat create
   */
  export type DomainStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainStatInclude<ExtArgs> | null
    /**
     * The data needed to create a DomainStat.
     */
    data: XOR<DomainStatCreateInput, DomainStatUncheckedCreateInput>
  }

  /**
   * DomainStat createMany
   */
  export type DomainStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DomainStats.
     */
    data: DomainStatCreateManyInput | DomainStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DomainStat createManyAndReturn
   */
  export type DomainStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * The data used to create many DomainStats.
     */
    data: DomainStatCreateManyInput | DomainStatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DomainStat update
   */
  export type DomainStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainStatInclude<ExtArgs> | null
    /**
     * The data needed to update a DomainStat.
     */
    data: XOR<DomainStatUpdateInput, DomainStatUncheckedUpdateInput>
    /**
     * Choose, which DomainStat to update.
     */
    where: DomainStatWhereUniqueInput
  }

  /**
   * DomainStat updateMany
   */
  export type DomainStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DomainStats.
     */
    data: XOR<DomainStatUpdateManyMutationInput, DomainStatUncheckedUpdateManyInput>
    /**
     * Filter which DomainStats to update
     */
    where?: DomainStatWhereInput
    /**
     * Limit how many DomainStats to update.
     */
    limit?: number
  }

  /**
   * DomainStat updateManyAndReturn
   */
  export type DomainStatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * The data used to update DomainStats.
     */
    data: XOR<DomainStatUpdateManyMutationInput, DomainStatUncheckedUpdateManyInput>
    /**
     * Filter which DomainStats to update
     */
    where?: DomainStatWhereInput
    /**
     * Limit how many DomainStats to update.
     */
    limit?: number
  }

  /**
   * DomainStat upsert
   */
  export type DomainStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainStatInclude<ExtArgs> | null
    /**
     * The filter to search for the DomainStat to update in case it exists.
     */
    where: DomainStatWhereUniqueInput
    /**
     * In case the DomainStat found by the `where` argument doesn't exist, create a new DomainStat with this data.
     */
    create: XOR<DomainStatCreateInput, DomainStatUncheckedCreateInput>
    /**
     * In case the DomainStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainStatUpdateInput, DomainStatUncheckedUpdateInput>
  }

  /**
   * DomainStat delete
   */
  export type DomainStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainStatInclude<ExtArgs> | null
    /**
     * Filter which DomainStat to delete.
     */
    where: DomainStatWhereUniqueInput
  }

  /**
   * DomainStat deleteMany
   */
  export type DomainStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DomainStats to delete
     */
    where?: DomainStatWhereInput
    /**
     * Limit how many DomainStats to delete.
     */
    limit?: number
  }

  /**
   * DomainStat.pageVisits
   */
  export type DomainStat$pageVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    where?: PageVisitWhereInput
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    cursor?: PageVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * DomainStat without action
   */
  export type DomainStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainStat
     */
    select?: DomainStatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DomainStat
     */
    omit?: DomainStatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainStatInclude<ExtArgs> | null
  }


  /**
   * Model PageVisit
   */

  export type AggregatePageVisit = {
    _count: PageVisitCountAggregateOutputType | null
    _avg: PageVisitAvgAggregateOutputType | null
    _sum: PageVisitSumAggregateOutputType | null
    _min: PageVisitMinAggregateOutputType | null
    _max: PageVisitMaxAggregateOutputType | null
  }

  export type PageVisitAvgAggregateOutputType = {
    id: number | null
    timeSpentSeconds: number | null
  }

  export type PageVisitSumAggregateOutputType = {
    id: number | null
    timeSpentSeconds: number | null
  }

  export type PageVisitMinAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    timeSpentSeconds: number | null
    extractedText: string | null
    summary: string | null
    textExtractedAt: Date | null
    domainName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageVisitMaxAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    timeSpentSeconds: number | null
    extractedText: string | null
    summary: string | null
    textExtractedAt: Date | null
    domainName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageVisitCountAggregateOutputType = {
    id: number
    url: number
    title: number
    timeSpentSeconds: number
    extractedText: number
    summary: number
    textExtractedAt: number
    domainName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageVisitAvgAggregateInputType = {
    id?: true
    timeSpentSeconds?: true
  }

  export type PageVisitSumAggregateInputType = {
    id?: true
    timeSpentSeconds?: true
  }

  export type PageVisitMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    timeSpentSeconds?: true
    extractedText?: true
    summary?: true
    textExtractedAt?: true
    domainName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageVisitMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    timeSpentSeconds?: true
    extractedText?: true
    summary?: true
    textExtractedAt?: true
    domainName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageVisitCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    timeSpentSeconds?: true
    extractedText?: true
    summary?: true
    textExtractedAt?: true
    domainName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageVisit to aggregate.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageVisits
    **/
    _count?: true | PageVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageVisitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageVisitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageVisitMaxAggregateInputType
  }

  export type GetPageVisitAggregateType<T extends PageVisitAggregateArgs> = {
        [P in keyof T & keyof AggregatePageVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageVisit[P]>
      : GetScalarType<T[P], AggregatePageVisit[P]>
  }




  export type PageVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageVisitWhereInput
    orderBy?: PageVisitOrderByWithAggregationInput | PageVisitOrderByWithAggregationInput[]
    by: PageVisitScalarFieldEnum[] | PageVisitScalarFieldEnum
    having?: PageVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageVisitCountAggregateInputType | true
    _avg?: PageVisitAvgAggregateInputType
    _sum?: PageVisitSumAggregateInputType
    _min?: PageVisitMinAggregateInputType
    _max?: PageVisitMaxAggregateInputType
  }

  export type PageVisitGroupByOutputType = {
    id: number
    url: string
    title: string | null
    timeSpentSeconds: number
    extractedText: string | null
    summary: string | null
    textExtractedAt: Date | null
    domainName: string
    createdAt: Date
    updatedAt: Date
    _count: PageVisitCountAggregateOutputType | null
    _avg: PageVisitAvgAggregateOutputType | null
    _sum: PageVisitSumAggregateOutputType | null
    _min: PageVisitMinAggregateOutputType | null
    _max: PageVisitMaxAggregateOutputType | null
  }

  type GetPageVisitGroupByPayload<T extends PageVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageVisitGroupByOutputType[P]>
            : GetScalarType<T[P], PageVisitGroupByOutputType[P]>
        }
      >
    >


  export type PageVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    timeSpentSeconds?: boolean
    extractedText?: boolean
    summary?: boolean
    textExtractedAt?: boolean
    domainName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domain?: boolean | DomainStatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageVisit"]>

  export type PageVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    timeSpentSeconds?: boolean
    extractedText?: boolean
    summary?: boolean
    textExtractedAt?: boolean
    domainName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domain?: boolean | DomainStatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageVisit"]>

  export type PageVisitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    timeSpentSeconds?: boolean
    extractedText?: boolean
    summary?: boolean
    textExtractedAt?: boolean
    domainName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domain?: boolean | DomainStatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageVisit"]>

  export type PageVisitSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    timeSpentSeconds?: boolean
    extractedText?: boolean
    summary?: boolean
    textExtractedAt?: boolean
    domainName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageVisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "timeSpentSeconds" | "extractedText" | "summary" | "textExtractedAt" | "domainName" | "createdAt" | "updatedAt", ExtArgs["result"]["pageVisit"]>
  export type PageVisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainStatDefaultArgs<ExtArgs>
  }
  export type PageVisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainStatDefaultArgs<ExtArgs>
  }
  export type PageVisitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domain?: boolean | DomainStatDefaultArgs<ExtArgs>
  }

  export type $PageVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageVisit"
    objects: {
      domain: Prisma.$DomainStatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      title: string | null
      timeSpentSeconds: number
      extractedText: string | null
      summary: string | null
      textExtractedAt: Date | null
      domainName: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pageVisit"]>
    composites: {}
  }

  type PageVisitGetPayload<S extends boolean | null | undefined | PageVisitDefaultArgs> = $Result.GetResult<Prisma.$PageVisitPayload, S>

  type PageVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageVisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageVisitCountAggregateInputType | true
    }

  export interface PageVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageVisit'], meta: { name: 'PageVisit' } }
    /**
     * Find zero or one PageVisit that matches the filter.
     * @param {PageVisitFindUniqueArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageVisitFindUniqueArgs>(args: SelectSubset<T, PageVisitFindUniqueArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageVisit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageVisitFindUniqueOrThrowArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, PageVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitFindFirstArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageVisitFindFirstArgs>(args?: SelectSubset<T, PageVisitFindFirstArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitFindFirstOrThrowArgs} args - Arguments to find a PageVisit
     * @example
     * // Get one PageVisit
     * const pageVisit = await prisma.pageVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, PageVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageVisits
     * const pageVisits = await prisma.pageVisit.findMany()
     * 
     * // Get first 10 PageVisits
     * const pageVisits = await prisma.pageVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageVisitWithIdOnly = await prisma.pageVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageVisitFindManyArgs>(args?: SelectSubset<T, PageVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageVisit.
     * @param {PageVisitCreateArgs} args - Arguments to create a PageVisit.
     * @example
     * // Create one PageVisit
     * const PageVisit = await prisma.pageVisit.create({
     *   data: {
     *     // ... data to create a PageVisit
     *   }
     * })
     * 
     */
    create<T extends PageVisitCreateArgs>(args: SelectSubset<T, PageVisitCreateArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageVisits.
     * @param {PageVisitCreateManyArgs} args - Arguments to create many PageVisits.
     * @example
     * // Create many PageVisits
     * const pageVisit = await prisma.pageVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageVisitCreateManyArgs>(args?: SelectSubset<T, PageVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageVisits and returns the data saved in the database.
     * @param {PageVisitCreateManyAndReturnArgs} args - Arguments to create many PageVisits.
     * @example
     * // Create many PageVisits
     * const pageVisit = await prisma.pageVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageVisits and only return the `id`
     * const pageVisitWithIdOnly = await prisma.pageVisit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, PageVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageVisit.
     * @param {PageVisitDeleteArgs} args - Arguments to delete one PageVisit.
     * @example
     * // Delete one PageVisit
     * const PageVisit = await prisma.pageVisit.delete({
     *   where: {
     *     // ... filter to delete one PageVisit
     *   }
     * })
     * 
     */
    delete<T extends PageVisitDeleteArgs>(args: SelectSubset<T, PageVisitDeleteArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageVisit.
     * @param {PageVisitUpdateArgs} args - Arguments to update one PageVisit.
     * @example
     * // Update one PageVisit
     * const pageVisit = await prisma.pageVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageVisitUpdateArgs>(args: SelectSubset<T, PageVisitUpdateArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageVisits.
     * @param {PageVisitDeleteManyArgs} args - Arguments to filter PageVisits to delete.
     * @example
     * // Delete a few PageVisits
     * const { count } = await prisma.pageVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageVisitDeleteManyArgs>(args?: SelectSubset<T, PageVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageVisits
     * const pageVisit = await prisma.pageVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageVisitUpdateManyArgs>(args: SelectSubset<T, PageVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageVisits and returns the data updated in the database.
     * @param {PageVisitUpdateManyAndReturnArgs} args - Arguments to update many PageVisits.
     * @example
     * // Update many PageVisits
     * const pageVisit = await prisma.pageVisit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageVisits and only return the `id`
     * const pageVisitWithIdOnly = await prisma.pageVisit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageVisitUpdateManyAndReturnArgs>(args: SelectSubset<T, PageVisitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageVisit.
     * @param {PageVisitUpsertArgs} args - Arguments to update or create a PageVisit.
     * @example
     * // Update or create a PageVisit
     * const pageVisit = await prisma.pageVisit.upsert({
     *   create: {
     *     // ... data to create a PageVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageVisit we want to update
     *   }
     * })
     */
    upsert<T extends PageVisitUpsertArgs>(args: SelectSubset<T, PageVisitUpsertArgs<ExtArgs>>): Prisma__PageVisitClient<$Result.GetResult<Prisma.$PageVisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitCountArgs} args - Arguments to filter PageVisits to count.
     * @example
     * // Count the number of PageVisits
     * const count = await prisma.pageVisit.count({
     *   where: {
     *     // ... the filter for the PageVisits we want to count
     *   }
     * })
    **/
    count<T extends PageVisitCountArgs>(
      args?: Subset<T, PageVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageVisitAggregateArgs>(args: Subset<T, PageVisitAggregateArgs>): Prisma.PrismaPromise<GetPageVisitAggregateType<T>>

    /**
     * Group by PageVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageVisitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageVisitGroupByArgs['orderBy'] }
        : { orderBy?: PageVisitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageVisit model
   */
  readonly fields: PageVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domain<T extends DomainStatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DomainStatDefaultArgs<ExtArgs>>): Prisma__DomainStatClient<$Result.GetResult<Prisma.$DomainStatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageVisit model
   */
  interface PageVisitFieldRefs {
    readonly id: FieldRef<"PageVisit", 'Int'>
    readonly url: FieldRef<"PageVisit", 'String'>
    readonly title: FieldRef<"PageVisit", 'String'>
    readonly timeSpentSeconds: FieldRef<"PageVisit", 'Int'>
    readonly extractedText: FieldRef<"PageVisit", 'String'>
    readonly summary: FieldRef<"PageVisit", 'String'>
    readonly textExtractedAt: FieldRef<"PageVisit", 'DateTime'>
    readonly domainName: FieldRef<"PageVisit", 'String'>
    readonly createdAt: FieldRef<"PageVisit", 'DateTime'>
    readonly updatedAt: FieldRef<"PageVisit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PageVisit findUnique
   */
  export type PageVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit findUniqueOrThrow
   */
  export type PageVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit findFirst
   */
  export type PageVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageVisits.
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageVisits.
     */
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * PageVisit findFirstOrThrow
   */
  export type PageVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisit to fetch.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageVisits.
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageVisits.
     */
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * PageVisit findMany
   */
  export type PageVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter, which PageVisits to fetch.
     */
    where?: PageVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageVisits to fetch.
     */
    orderBy?: PageVisitOrderByWithRelationInput | PageVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageVisits.
     */
    cursor?: PageVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageVisits.
     */
    skip?: number
    distinct?: PageVisitScalarFieldEnum | PageVisitScalarFieldEnum[]
  }

  /**
   * PageVisit create
   */
  export type PageVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * The data needed to create a PageVisit.
     */
    data: XOR<PageVisitCreateInput, PageVisitUncheckedCreateInput>
  }

  /**
   * PageVisit createMany
   */
  export type PageVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageVisits.
     */
    data: PageVisitCreateManyInput | PageVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageVisit createManyAndReturn
   */
  export type PageVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * The data used to create many PageVisits.
     */
    data: PageVisitCreateManyInput | PageVisitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageVisit update
   */
  export type PageVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * The data needed to update a PageVisit.
     */
    data: XOR<PageVisitUpdateInput, PageVisitUncheckedUpdateInput>
    /**
     * Choose, which PageVisit to update.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit updateMany
   */
  export type PageVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageVisits.
     */
    data: XOR<PageVisitUpdateManyMutationInput, PageVisitUncheckedUpdateManyInput>
    /**
     * Filter which PageVisits to update
     */
    where?: PageVisitWhereInput
    /**
     * Limit how many PageVisits to update.
     */
    limit?: number
  }

  /**
   * PageVisit updateManyAndReturn
   */
  export type PageVisitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * The data used to update PageVisits.
     */
    data: XOR<PageVisitUpdateManyMutationInput, PageVisitUncheckedUpdateManyInput>
    /**
     * Filter which PageVisits to update
     */
    where?: PageVisitWhereInput
    /**
     * Limit how many PageVisits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageVisit upsert
   */
  export type PageVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * The filter to search for the PageVisit to update in case it exists.
     */
    where: PageVisitWhereUniqueInput
    /**
     * In case the PageVisit found by the `where` argument doesn't exist, create a new PageVisit with this data.
     */
    create: XOR<PageVisitCreateInput, PageVisitUncheckedCreateInput>
    /**
     * In case the PageVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageVisitUpdateInput, PageVisitUncheckedUpdateInput>
  }

  /**
   * PageVisit delete
   */
  export type PageVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
    /**
     * Filter which PageVisit to delete.
     */
    where: PageVisitWhereUniqueInput
  }

  /**
   * PageVisit deleteMany
   */
  export type PageVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageVisits to delete
     */
    where?: PageVisitWhereInput
    /**
     * Limit how many PageVisits to delete.
     */
    limit?: number
  }

  /**
   * PageVisit without action
   */
  export type PageVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageVisit
     */
    select?: PageVisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageVisit
     */
    omit?: PageVisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageVisitInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DomainStatScalarFieldEnum: {
    id: 'id',
    name: 'name',
    totalTimeSpentSeconds: 'totalTimeSpentSeconds',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DomainStatScalarFieldEnum = (typeof DomainStatScalarFieldEnum)[keyof typeof DomainStatScalarFieldEnum]


  export const PageVisitScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    timeSpentSeconds: 'timeSpentSeconds',
    extractedText: 'extractedText',
    summary: 'summary',
    textExtractedAt: 'textExtractedAt',
    domainName: 'domainName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageVisitScalarFieldEnum = (typeof PageVisitScalarFieldEnum)[keyof typeof PageVisitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type DomainStatWhereInput = {
    AND?: DomainStatWhereInput | DomainStatWhereInput[]
    OR?: DomainStatWhereInput[]
    NOT?: DomainStatWhereInput | DomainStatWhereInput[]
    id?: IntFilter<"DomainStat"> | number
    name?: StringFilter<"DomainStat"> | string
    totalTimeSpentSeconds?: IntFilter<"DomainStat"> | number
    createdAt?: DateTimeFilter<"DomainStat"> | Date | string
    updatedAt?: DateTimeFilter<"DomainStat"> | Date | string
    pageVisits?: PageVisitListRelationFilter
  }

  export type DomainStatOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    totalTimeSpentSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pageVisits?: PageVisitOrderByRelationAggregateInput
  }

  export type DomainStatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DomainStatWhereInput | DomainStatWhereInput[]
    OR?: DomainStatWhereInput[]
    NOT?: DomainStatWhereInput | DomainStatWhereInput[]
    totalTimeSpentSeconds?: IntFilter<"DomainStat"> | number
    createdAt?: DateTimeFilter<"DomainStat"> | Date | string
    updatedAt?: DateTimeFilter<"DomainStat"> | Date | string
    pageVisits?: PageVisitListRelationFilter
  }, "id" | "name">

  export type DomainStatOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    totalTimeSpentSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DomainStatCountOrderByAggregateInput
    _avg?: DomainStatAvgOrderByAggregateInput
    _max?: DomainStatMaxOrderByAggregateInput
    _min?: DomainStatMinOrderByAggregateInput
    _sum?: DomainStatSumOrderByAggregateInput
  }

  export type DomainStatScalarWhereWithAggregatesInput = {
    AND?: DomainStatScalarWhereWithAggregatesInput | DomainStatScalarWhereWithAggregatesInput[]
    OR?: DomainStatScalarWhereWithAggregatesInput[]
    NOT?: DomainStatScalarWhereWithAggregatesInput | DomainStatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DomainStat"> | number
    name?: StringWithAggregatesFilter<"DomainStat"> | string
    totalTimeSpentSeconds?: IntWithAggregatesFilter<"DomainStat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DomainStat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DomainStat"> | Date | string
  }

  export type PageVisitWhereInput = {
    AND?: PageVisitWhereInput | PageVisitWhereInput[]
    OR?: PageVisitWhereInput[]
    NOT?: PageVisitWhereInput | PageVisitWhereInput[]
    id?: IntFilter<"PageVisit"> | number
    url?: StringFilter<"PageVisit"> | string
    title?: StringNullableFilter<"PageVisit"> | string | null
    timeSpentSeconds?: IntFilter<"PageVisit"> | number
    extractedText?: StringNullableFilter<"PageVisit"> | string | null
    summary?: StringNullableFilter<"PageVisit"> | string | null
    textExtractedAt?: DateTimeNullableFilter<"PageVisit"> | Date | string | null
    domainName?: StringFilter<"PageVisit"> | string
    createdAt?: DateTimeFilter<"PageVisit"> | Date | string
    updatedAt?: DateTimeFilter<"PageVisit"> | Date | string
    domain?: XOR<DomainStatScalarRelationFilter, DomainStatWhereInput>
  }

  export type PageVisitOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    timeSpentSeconds?: SortOrder
    extractedText?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    textExtractedAt?: SortOrderInput | SortOrder
    domainName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: DomainStatOrderByWithRelationInput
  }

  export type PageVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: PageVisitWhereInput | PageVisitWhereInput[]
    OR?: PageVisitWhereInput[]
    NOT?: PageVisitWhereInput | PageVisitWhereInput[]
    title?: StringNullableFilter<"PageVisit"> | string | null
    timeSpentSeconds?: IntFilter<"PageVisit"> | number
    extractedText?: StringNullableFilter<"PageVisit"> | string | null
    summary?: StringNullableFilter<"PageVisit"> | string | null
    textExtractedAt?: DateTimeNullableFilter<"PageVisit"> | Date | string | null
    domainName?: StringFilter<"PageVisit"> | string
    createdAt?: DateTimeFilter<"PageVisit"> | Date | string
    updatedAt?: DateTimeFilter<"PageVisit"> | Date | string
    domain?: XOR<DomainStatScalarRelationFilter, DomainStatWhereInput>
  }, "id" | "url">

  export type PageVisitOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    timeSpentSeconds?: SortOrder
    extractedText?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    textExtractedAt?: SortOrderInput | SortOrder
    domainName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageVisitCountOrderByAggregateInput
    _avg?: PageVisitAvgOrderByAggregateInput
    _max?: PageVisitMaxOrderByAggregateInput
    _min?: PageVisitMinOrderByAggregateInput
    _sum?: PageVisitSumOrderByAggregateInput
  }

  export type PageVisitScalarWhereWithAggregatesInput = {
    AND?: PageVisitScalarWhereWithAggregatesInput | PageVisitScalarWhereWithAggregatesInput[]
    OR?: PageVisitScalarWhereWithAggregatesInput[]
    NOT?: PageVisitScalarWhereWithAggregatesInput | PageVisitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PageVisit"> | number
    url?: StringWithAggregatesFilter<"PageVisit"> | string
    title?: StringNullableWithAggregatesFilter<"PageVisit"> | string | null
    timeSpentSeconds?: IntWithAggregatesFilter<"PageVisit"> | number
    extractedText?: StringNullableWithAggregatesFilter<"PageVisit"> | string | null
    summary?: StringNullableWithAggregatesFilter<"PageVisit"> | string | null
    textExtractedAt?: DateTimeNullableWithAggregatesFilter<"PageVisit"> | Date | string | null
    domainName?: StringWithAggregatesFilter<"PageVisit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PageVisit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PageVisit"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type DomainStatCreateInput = {
    name: string
    totalTimeSpentSeconds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pageVisits?: PageVisitCreateNestedManyWithoutDomainInput
  }

  export type DomainStatUncheckedCreateInput = {
    id?: number
    name: string
    totalTimeSpentSeconds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pageVisits?: PageVisitUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainStatUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalTimeSpentSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageVisits?: PageVisitUpdateManyWithoutDomainNestedInput
  }

  export type DomainStatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalTimeSpentSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pageVisits?: PageVisitUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainStatCreateManyInput = {
    id?: number
    name: string
    totalTimeSpentSeconds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainStatUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalTimeSpentSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainStatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalTimeSpentSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVisitCreateInput = {
    url: string
    title?: string | null
    timeSpentSeconds?: number
    extractedText?: string | null
    summary?: string | null
    textExtractedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: DomainStatCreateNestedOneWithoutPageVisitsInput
  }

  export type PageVisitUncheckedCreateInput = {
    id?: number
    url: string
    title?: string | null
    timeSpentSeconds?: number
    extractedText?: string | null
    summary?: string | null
    textExtractedAt?: Date | string | null
    domainName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageVisitUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeSpentSeconds?: IntFieldUpdateOperationsInput | number
    extractedText?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    textExtractedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: DomainStatUpdateOneRequiredWithoutPageVisitsNestedInput
  }

  export type PageVisitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeSpentSeconds?: IntFieldUpdateOperationsInput | number
    extractedText?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    textExtractedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    domainName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVisitCreateManyInput = {
    id?: number
    url: string
    title?: string | null
    timeSpentSeconds?: number
    extractedText?: string | null
    summary?: string | null
    textExtractedAt?: Date | string | null
    domainName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageVisitUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeSpentSeconds?: IntFieldUpdateOperationsInput | number
    extractedText?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    textExtractedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVisitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeSpentSeconds?: IntFieldUpdateOperationsInput | number
    extractedText?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    textExtractedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    domainName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PageVisitListRelationFilter = {
    every?: PageVisitWhereInput
    some?: PageVisitWhereInput
    none?: PageVisitWhereInput
  }

  export type PageVisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainStatCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalTimeSpentSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainStatAvgOrderByAggregateInput = {
    id?: SortOrder
    totalTimeSpentSeconds?: SortOrder
  }

  export type DomainStatMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalTimeSpentSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainStatMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    totalTimeSpentSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DomainStatSumOrderByAggregateInput = {
    id?: SortOrder
    totalTimeSpentSeconds?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DomainStatScalarRelationFilter = {
    is?: DomainStatWhereInput
    isNot?: DomainStatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PageVisitCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    timeSpentSeconds?: SortOrder
    extractedText?: SortOrder
    summary?: SortOrder
    textExtractedAt?: SortOrder
    domainName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageVisitAvgOrderByAggregateInput = {
    id?: SortOrder
    timeSpentSeconds?: SortOrder
  }

  export type PageVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    timeSpentSeconds?: SortOrder
    extractedText?: SortOrder
    summary?: SortOrder
    textExtractedAt?: SortOrder
    domainName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageVisitMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    timeSpentSeconds?: SortOrder
    extractedText?: SortOrder
    summary?: SortOrder
    textExtractedAt?: SortOrder
    domainName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageVisitSumOrderByAggregateInput = {
    id?: SortOrder
    timeSpentSeconds?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PageVisitCreateNestedManyWithoutDomainInput = {
    create?: XOR<PageVisitCreateWithoutDomainInput, PageVisitUncheckedCreateWithoutDomainInput> | PageVisitCreateWithoutDomainInput[] | PageVisitUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutDomainInput | PageVisitCreateOrConnectWithoutDomainInput[]
    createMany?: PageVisitCreateManyDomainInputEnvelope
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
  }

  export type PageVisitUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<PageVisitCreateWithoutDomainInput, PageVisitUncheckedCreateWithoutDomainInput> | PageVisitCreateWithoutDomainInput[] | PageVisitUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutDomainInput | PageVisitCreateOrConnectWithoutDomainInput[]
    createMany?: PageVisitCreateManyDomainInputEnvelope
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PageVisitUpdateManyWithoutDomainNestedInput = {
    create?: XOR<PageVisitCreateWithoutDomainInput, PageVisitUncheckedCreateWithoutDomainInput> | PageVisitCreateWithoutDomainInput[] | PageVisitUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutDomainInput | PageVisitCreateOrConnectWithoutDomainInput[]
    upsert?: PageVisitUpsertWithWhereUniqueWithoutDomainInput | PageVisitUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: PageVisitCreateManyDomainInputEnvelope
    set?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    disconnect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    delete?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    update?: PageVisitUpdateWithWhereUniqueWithoutDomainInput | PageVisitUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: PageVisitUpdateManyWithWhereWithoutDomainInput | PageVisitUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
  }

  export type PageVisitUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<PageVisitCreateWithoutDomainInput, PageVisitUncheckedCreateWithoutDomainInput> | PageVisitCreateWithoutDomainInput[] | PageVisitUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: PageVisitCreateOrConnectWithoutDomainInput | PageVisitCreateOrConnectWithoutDomainInput[]
    upsert?: PageVisitUpsertWithWhereUniqueWithoutDomainInput | PageVisitUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: PageVisitCreateManyDomainInputEnvelope
    set?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    disconnect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    delete?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    connect?: PageVisitWhereUniqueInput | PageVisitWhereUniqueInput[]
    update?: PageVisitUpdateWithWhereUniqueWithoutDomainInput | PageVisitUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: PageVisitUpdateManyWithWhereWithoutDomainInput | PageVisitUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
  }

  export type DomainStatCreateNestedOneWithoutPageVisitsInput = {
    create?: XOR<DomainStatCreateWithoutPageVisitsInput, DomainStatUncheckedCreateWithoutPageVisitsInput>
    connectOrCreate?: DomainStatCreateOrConnectWithoutPageVisitsInput
    connect?: DomainStatWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DomainStatUpdateOneRequiredWithoutPageVisitsNestedInput = {
    create?: XOR<DomainStatCreateWithoutPageVisitsInput, DomainStatUncheckedCreateWithoutPageVisitsInput>
    connectOrCreate?: DomainStatCreateOrConnectWithoutPageVisitsInput
    upsert?: DomainStatUpsertWithoutPageVisitsInput
    connect?: DomainStatWhereUniqueInput
    update?: XOR<XOR<DomainStatUpdateToOneWithWhereWithoutPageVisitsInput, DomainStatUpdateWithoutPageVisitsInput>, DomainStatUncheckedUpdateWithoutPageVisitsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PageVisitCreateWithoutDomainInput = {
    url: string
    title?: string | null
    timeSpentSeconds?: number
    extractedText?: string | null
    summary?: string | null
    textExtractedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageVisitUncheckedCreateWithoutDomainInput = {
    id?: number
    url: string
    title?: string | null
    timeSpentSeconds?: number
    extractedText?: string | null
    summary?: string | null
    textExtractedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageVisitCreateOrConnectWithoutDomainInput = {
    where: PageVisitWhereUniqueInput
    create: XOR<PageVisitCreateWithoutDomainInput, PageVisitUncheckedCreateWithoutDomainInput>
  }

  export type PageVisitCreateManyDomainInputEnvelope = {
    data: PageVisitCreateManyDomainInput | PageVisitCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type PageVisitUpsertWithWhereUniqueWithoutDomainInput = {
    where: PageVisitWhereUniqueInput
    update: XOR<PageVisitUpdateWithoutDomainInput, PageVisitUncheckedUpdateWithoutDomainInput>
    create: XOR<PageVisitCreateWithoutDomainInput, PageVisitUncheckedCreateWithoutDomainInput>
  }

  export type PageVisitUpdateWithWhereUniqueWithoutDomainInput = {
    where: PageVisitWhereUniqueInput
    data: XOR<PageVisitUpdateWithoutDomainInput, PageVisitUncheckedUpdateWithoutDomainInput>
  }

  export type PageVisitUpdateManyWithWhereWithoutDomainInput = {
    where: PageVisitScalarWhereInput
    data: XOR<PageVisitUpdateManyMutationInput, PageVisitUncheckedUpdateManyWithoutDomainInput>
  }

  export type PageVisitScalarWhereInput = {
    AND?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
    OR?: PageVisitScalarWhereInput[]
    NOT?: PageVisitScalarWhereInput | PageVisitScalarWhereInput[]
    id?: IntFilter<"PageVisit"> | number
    url?: StringFilter<"PageVisit"> | string
    title?: StringNullableFilter<"PageVisit"> | string | null
    timeSpentSeconds?: IntFilter<"PageVisit"> | number
    extractedText?: StringNullableFilter<"PageVisit"> | string | null
    summary?: StringNullableFilter<"PageVisit"> | string | null
    textExtractedAt?: DateTimeNullableFilter<"PageVisit"> | Date | string | null
    domainName?: StringFilter<"PageVisit"> | string
    createdAt?: DateTimeFilter<"PageVisit"> | Date | string
    updatedAt?: DateTimeFilter<"PageVisit"> | Date | string
  }

  export type DomainStatCreateWithoutPageVisitsInput = {
    name: string
    totalTimeSpentSeconds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainStatUncheckedCreateWithoutPageVisitsInput = {
    id?: number
    name: string
    totalTimeSpentSeconds?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DomainStatCreateOrConnectWithoutPageVisitsInput = {
    where: DomainStatWhereUniqueInput
    create: XOR<DomainStatCreateWithoutPageVisitsInput, DomainStatUncheckedCreateWithoutPageVisitsInput>
  }

  export type DomainStatUpsertWithoutPageVisitsInput = {
    update: XOR<DomainStatUpdateWithoutPageVisitsInput, DomainStatUncheckedUpdateWithoutPageVisitsInput>
    create: XOR<DomainStatCreateWithoutPageVisitsInput, DomainStatUncheckedCreateWithoutPageVisitsInput>
    where?: DomainStatWhereInput
  }

  export type DomainStatUpdateToOneWithWhereWithoutPageVisitsInput = {
    where?: DomainStatWhereInput
    data: XOR<DomainStatUpdateWithoutPageVisitsInput, DomainStatUncheckedUpdateWithoutPageVisitsInput>
  }

  export type DomainStatUpdateWithoutPageVisitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    totalTimeSpentSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainStatUncheckedUpdateWithoutPageVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalTimeSpentSeconds?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVisitCreateManyDomainInput = {
    id?: number
    url: string
    title?: string | null
    timeSpentSeconds?: number
    extractedText?: string | null
    summary?: string | null
    textExtractedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageVisitUpdateWithoutDomainInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeSpentSeconds?: IntFieldUpdateOperationsInput | number
    extractedText?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    textExtractedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVisitUncheckedUpdateWithoutDomainInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeSpentSeconds?: IntFieldUpdateOperationsInput | number
    extractedText?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    textExtractedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageVisitUncheckedUpdateManyWithoutDomainInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    timeSpentSeconds?: IntFieldUpdateOperationsInput | number
    extractedText?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    textExtractedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}