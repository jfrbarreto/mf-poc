
    export type RemoteKeys = 'provider1/button';
    type PackageType<T> = T extends 'provider1/button' ? typeof import('provider1/button') :any;