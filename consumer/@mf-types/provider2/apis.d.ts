
    export type RemoteKeys = 'provider2/component' | 'provider2/constant' | 'provider2/hook';
    type PackageType<T> = T extends 'provider2/hook' ? typeof import('provider2/hook') :T extends 'provider2/constant' ? typeof import('provider2/constant') :T extends 'provider2/component' ? typeof import('provider2/component') :any;