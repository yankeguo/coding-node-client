# DescribeWorkbenchIssueListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Keyword** | **string** | 关键字 | [optional] [default to undefined]
**PageNumber** | **number** | 分页查询的分页数，不填的话从第一页开始查询 | [optional] [default to undefined]
**PageSize** | **number** | 每页展示数，默认 20 ，最大值 500 | [optional] [default to undefined]
**ProjectId** | **number** | 不填或者填0则查询团队内参与的所有项目 | [optional] [default to undefined]
**Type** | **string** | 事项类型，取值如“REQUIREMENT”、“DEFECT”等 | [optional] [default to undefined]

## Example

```typescript
import { DescribeWorkbenchIssueListRequest } from './api';

const instance: DescribeWorkbenchIssueListRequest = {
    Keyword,
    PageNumber,
    PageSize,
    ProjectId,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
