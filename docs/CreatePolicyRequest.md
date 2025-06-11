# CreatePolicyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alias** | **string** | 显示名称 | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to undefined]
**Name** | **string** | 名称 | [optional] [default to undefined]
**PolicyDocument** | [**PolicyDocument**](PolicyDocument.md) |  | [optional] [default to undefined]
**PolicyType** | **string** | 权限组类型：IDENTITY | RESOURCE | [optional] [default to undefined]
**ResourceType** | **Array&lt;string&gt;** | 适用的资源类型 | [optional] [default to undefined]

## Example

```typescript
import { CreatePolicyRequest } from './api';

const instance: CreatePolicyRequest = {
    Alias,
    Description,
    Name,
    PolicyDocument,
    PolicyType,
    ResourceType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
