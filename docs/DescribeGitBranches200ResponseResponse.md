# DescribeGitBranches200ResponseResponse

公共返回体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Branches** | [**Array&lt;GitBranchInfo&gt;**](GitBranchInfo.md) | 分支详细信息 | [optional] [default to undefined]
**TotalCount** | **number** | 分支数量 | [optional] [default to undefined]
**RequestId** | **string** | 请求id | [optional] [default to 'xxxxx']

## Example

```typescript
import { DescribeGitBranches200ResponseResponse } from './api';

const instance: DescribeGitBranches200ResponseResponse = {
    Branches,
    TotalCount,
    RequestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
