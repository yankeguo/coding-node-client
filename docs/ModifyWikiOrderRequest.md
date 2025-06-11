# ModifyWikiOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**After** | **number** | 在第几层级之后 | [optional] [default to undefined]
**Before** | **number** | 在第几层级之前 | [optional] [default to undefined]
**Forced** | **boolean** | 是否检查权限,默认false | [optional] [default to undefined]
**Iid** | **number** | wiki Iid | [optional] [default to undefined]
**ParentIid** | **number** | 父级 Iid | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]

## Example

```typescript
import { ModifyWikiOrderRequest } from './api';

const instance: ModifyWikiOrderRequest = {
    After,
    Before,
    Forced,
    Iid,
    ParentIid,
    ProjectName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
