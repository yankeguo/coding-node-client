# Run

测试计划详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignedToId** | **number** | 处理人ID | [optional] [default to undefined]
**BlockedCount** | **number** | 计划内阻塞测试数量 | [optional] [default to undefined]
**CompletedAt** | **string** | 归档时间 | [optional] [default to '']
**ConfigEnvironmentId** | **number** | 环境标识 | [optional] [default to undefined]
**CreatedAt** | **string** | 创建时间 | [optional] [default to '']
**CreatedBy** | **number** | 创建人ID | [optional] [default to undefined]
**Days** | **number** | 持续天数 | [optional] [default to undefined]
**Description** | **string** | 描述 | [optional] [default to '']
**ExecuteType** | **number** | 执行方式: 1-手动执行 2-自动化流水线执行 | [optional] [default to undefined]
**FailedCount** | **number** | 计划内失败测试数量 | [optional] [default to undefined]
**GitDepotId** | **number** | 代码仓库 ID | [optional] [default to undefined]
**GitDepotName** | **string** | 代码仓库名名称 | [optional] [default to '']
**GitReleaseId** | **number** | 发布版本 ID（资源 ID） | [optional] [default to undefined]
**GitReleaseName** | **string** | 发布版本名称 | [optional] [default to '']
**GitReleaseState** | **number** | 发布版本名称状态：0-未发布 1-已发布 | [optional] [default to undefined]
**Id** | **number** | ID 主键 | [optional] [default to undefined]
**IncludeAll** | **boolean** | 是否包含全部用例 | [optional] [default to false]
**IsCompleted** | **boolean** | 是否归档 | [optional] [default to false]
**IterationId** | **number** | 所属迭代 ID | [optional] [default to undefined]
**IterationName** | **string** | 迭代名称 | [optional] [default to '']
**Name** | **string** | 名称 | [optional] [default to '']
**PassedCount** | **number** | 计划内通过测试数量 | [optional] [default to undefined]
**RetestCount** | **number** | 计划内重新测试数量 | [optional] [default to undefined]
**SectionId** | **number** | 分组 ID | [optional] [default to undefined]
**SectionName** | **string** | 分组名 | [optional] [default to '']
**State** | **number** | 状态: 0-未开始 1-进行中 2-已测完 | [optional] [default to undefined]
**UntestedCount** | **number** | 计划内未测试数量 | [optional] [default to undefined]

## Example

```typescript
import { Run } from './api';

const instance: Run = {
    AssignedToId,
    BlockedCount,
    CompletedAt,
    ConfigEnvironmentId,
    CreatedAt,
    CreatedBy,
    Days,
    Description,
    ExecuteType,
    FailedCount,
    GitDepotId,
    GitDepotName,
    GitReleaseId,
    GitReleaseName,
    GitReleaseState,
    Id,
    IncludeAll,
    IsCompleted,
    IterationId,
    IterationName,
    Name,
    PassedCount,
    RetestCount,
    SectionId,
    SectionName,
    State,
    UntestedCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
