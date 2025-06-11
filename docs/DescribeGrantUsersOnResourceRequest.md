# DescribeGrantUsersOnResourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserIdScope** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**PolicyIdScope** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**PageSize** | **number** | 请求条数 | [optional] [default to 0]
**PageNumber** | **number** | 请求页数 | [optional] [default to 0]
**Resource** | [**RamGrantResourceInfoRequest**](.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DescribeGrantUsersOnResourceRequest } from './api';

const instance: DescribeGrantUsersOnResourceRequest = {
    UserIdScope,
    PolicyIdScope,
    PageSize,
    PageNumber,
    Resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
