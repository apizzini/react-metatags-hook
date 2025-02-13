import { MutableRefObject } from 'react';
import { MetaTagModel } from '../types';
declare type InstanceConfig = MutableRefObject<MetaTagModel>;
declare type StoreListener = (metas: MetaTagModel) => void;
export declare const addMetasToStore: (instanceConfig: InstanceConfig) => void;
export declare const removeMetasFromStore: (instanceConfig: InstanceConfig) => void;
export declare const clearStore: () => void;
export declare const subscribeToStore: (listener: StoreListener) => () => void;
export declare const getState: () => MetaTagModel;
export {};
