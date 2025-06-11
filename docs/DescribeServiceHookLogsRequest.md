# DescribeServiceHookLogsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Service Hook 编号 | [optional] [default to undefined]
**PageNumber** | **number** | 分页页码 | [optional] [default to undefined]
**PageSize** | **number** | 分页大小 | [optional] [default to undefined]
**ProjectId** | **number** | 项目编号 | [optional] [default to undefined]
**TargetType** | **string** | 目标数据类型：PROJECT,SPACE_NODE,PROGRAM,默认PROJECT | [optional] [default to undefined]

## Example

```typescript
import { DescribeServiceHookLogsRequest } from './api';

const instance: DescribeServiceHookLogsRequest = {
    Id,
    PageNumber,
    PageSize,
    ProjectId,
    TargetType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
