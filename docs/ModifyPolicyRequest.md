# ModifyPolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alias** | **string** | 显示名称 | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to undefined]
**Id** | **number** | 权限组 ID | [optional] [default to undefined]
**Name** | **string** | 名称 | [optional] [default to undefined]
**PolicyDocument** | [**PolicyDocument**](PolicyDocument.md) |  | [optional] [default to undefined]
**ResourceType** | **Array&lt;string&gt;** | 适用的资源类型 | [optional] [default to undefined]

## Example

```typescript
import { ModifyPolicyRequest } from './api';

const instance: ModifyPolicyRequest = {
    Alias,
    Description,
    Id,
    Name,
    PolicyDocument,
    ResourceType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
