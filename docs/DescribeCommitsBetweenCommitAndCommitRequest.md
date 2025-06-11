# DescribeCommitsBetweenCommitAndCommitRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，选择其一即可 | [optional] [default to undefined]
**Source** | **string** | 查询起点sha值 | [optional] [default to undefined]
**Target** | **string** | 查询目标sha值 | [optional] [default to undefined]

## Example

```typescript
import { DescribeCommitsBetweenCommitAndCommitRequest } from './api';

const instance: DescribeCommitsBetweenCommitAndCommitRequest = {
    DepotId,
    DepotPath,
    Source,
    Target,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
