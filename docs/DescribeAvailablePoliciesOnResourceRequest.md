# DescribeAvailablePoliciesOnResourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filter** | [**DescribeAvailablePoliciesOnResourceRequestFilter**](DescribeAvailablePoliciesOnResourceRequestFilter.md) |  | [default to undefined]
**PageNumber** | **number** | 请求页数 | [default to undefined]
**PageSize** | **number** | 请求条数 | [default to undefined]
**Resource** | [**ResourceInfoOfPolicyScope**](ResourceInfoOfPolicyScope.md) |  | [default to undefined]

## Example

```typescript
import { DescribeAvailablePoliciesOnResourceRequest } from './api';

const instance: DescribeAvailablePoliciesOnResourceRequest = {
    Filter,
    PageNumber,
    PageSize,
    Resource,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
