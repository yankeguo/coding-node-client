# PredicatePolicy

资源权限判定策略信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasAdministrator** | **boolean** | 是否存在admin授权 | [optional] [default to false]
**ResourcePredicatePolicy** | **string** |   SELF_PARENT  // 同时使用父级资源+当前资源   SELF_NONE  // 只使用当前资源   NONE_PARENT  // 只使用父级资源 | [optional] [default to '']

## Example

```typescript
import { PredicatePolicy } from './api';

const instance: PredicatePolicy = {
    HasAdministrator,
    ResourcePredicatePolicy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
