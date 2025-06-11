# SetPredicatePolicyOnResourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Resource** | [**ResourceInfo**](ResourceInfo.md) |  | [optional] [default to undefined]
**ResourcePredicatePolicy** | **string** |   SELF_PARENT // 同时使用父级资源+当前资源   SELF_NONE  // 只使用当前消息   NONE_PARENT  // 只使用父级资源 | [optional] [default to undefined]

## Example

```typescript
import { SetPredicatePolicyOnResourceRequest } from './api';

const instance: SetPredicatePolicyOnResourceRequest = {
    Resource,
    ResourcePredicatePolicy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
